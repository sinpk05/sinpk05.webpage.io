
// 자기소개 버튼
const aboutButton = document.getElementById("aboutButton");

// 자기소개 영역으로 이동
aboutButton.addEventListener("click", function () {

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});


// 전체 프로젝트 버튼 가져오기
const projectButton = document.getElementById("projectButton");

// 전체 프로젝트 영역 가져오기
const allProjects = document.getElementById("allProjects");

// 전체 프로젝트 버튼 클릭
projectButton.addEventListener("click", function () {

    // 프로젝트가 숨겨져 있는 경우
    if (allProjects.hidden) {

        // 전체 프로젝트 표시
        allProjects.hidden = false;

        // 버튼 문구 변경
        projectButton.textContent = "전체 프로젝트 접기 ▲";
        projectButton.setAttribute("aria-expanded", "true");

    } else {

        // 전체 프로젝트 숨기기
        allProjects.hidden = true;

        // 버튼 문구 변경
        projectButton.textContent = "전체 프로젝트 보기 ▼";
        projectButton.setAttribute("aria-expanded", "false");

    }

});
