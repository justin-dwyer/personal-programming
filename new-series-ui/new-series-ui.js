var branches = document.querySelector("#branches");
var tarsInputBranch = document.querySelector("#tars-input-branch");
var seriesId = document.querySelector("#series-id");
var inputSeriesId = document.querySelectorAll(".input-series-id");
var qTestId = document.querySelector("#qtest-id");
var inputQtestId = document.querySelector("#input-qtest-id");
var pageTitle = document.querySelector("title");
// var clickCopyGuide = window.getComputedStyle(document.querySelector(".click-copy"), ":after");
var pro = document.querySelector("#pro");
var rap = document.querySelector("#rap");
var rerunTag = document.querySelector("#rerun-tag");
var parallelTag = document.querySelector("#parallel-tag");
var gitPullLine = document.querySelector("#git-pull-line");

function seriesFill(){
    for(i=0; i < inputSeriesId.length; ++i) {
        if(inputSeriesId[i].id === "series-id-tars") {
            inputSeriesId[i].textContent = " id " + seriesId.value;
            if(seriesId.value === ""){
                inputSeriesId[i].textContent = "";
            }
        }
        else {
            inputSeriesId[i].textContent = seriesId.value;
        }

    }
    pro.href = pro.textContent;
    rap.href = rap.textContent;
}
function branchFill(){
    tarsInputBranch.textContent = " " + branches.value;
}
function cycleFill(){
    if(qTestId.value === "") {
        inputQtestId.textContent = "";
    }
    else {
        inputQtestId.textContent = " --qtest=" + qTestId.value;
    }
}
function copyText(nodeToCopy) {
    var range = document.createRange();
    range.selectNode(nodeToCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
}
function changeDisplay(nodeToAlter) {
    if(nodeToAlter.className === "display-true") {
        nodeToAlter.className = "display-false";
    }
    else {
        nodeToAlter.className = "display-true";
    }
}
