import { getExcelData } from "../getData";

const createPublicationContainer = (yearRange) => {
  const yearContainer = document.createElement("div");
  yearContainer.classList.add("publication__year-container");
  yearContainer.setAttribute("year-range", yearRange);

  const yearTitle = document.createElement("div");
  yearTitle.classList.add("publication__year-title");

  const yearText = document.createElement("h3");
  yearText.classList.add("title");
  yearText.textContent = yearRange;

  yearTitle.appendChild(yearText);
  yearContainer.appendChild(yearTitle);

  const listContainer = document.createElement("div");
  listContainer.classList.add("publication__list-container");
  yearContainer.appendChild(listContainer);

  return yearContainer;
};

const drawPublications = (data) => {
  const publicationContainer = document.querySelector(".publication-container");

  const yearRanges = {
    "2020~": [],
    "2004~2019": [],
    "1999~2003": [],
  };

  // 데이터를 년도 범위에 따라 분류
  data.forEach((item) => {
    const { Year } = item;

    if (Year >= 2020) {
      yearRanges["2020~"].push(item);
    } else if (Year >= 2004) {
      yearRanges["2004~2019"].push(item);
    } else {
      yearRanges["1999~2003"].push(item);
    }
  });

  // 각 년도 범위에 대한 컨테이너 생성
  Object.entries(yearRanges).forEach(([yearRange, items]) => {
    const yearContainer = createPublicationContainer(yearRange);
    publicationContainer.appendChild(yearContainer);

    const listContainer = yearContainer.querySelector(".publication__list-container");

    // 아이템별로 리스트 생성
    const length = items.length;
    items.forEach((item, index) => {
      const { Authors, Title, Publication, Volume, Pages } = item;

      const listItem = document.createElement("div");
      listItem.classList.add("publication__list");

      const indexElement = document.createElement("div");
      indexElement.classList.add("publication__list-index");
      indexElement.textContent = (length - index).toString();

      const content = document.createElement("div");
      content.classList.add("publication__list-content");

      const titleElement = document.createElement("h4");
      titleElement.classList.add("title");
      titleElement.textContent = Title;

      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("description");
      descriptionElement.textContent = `${Authors} (${Publication}, ${Volume}, ${Pages})`;

      content.appendChild(titleElement);
      content.appendChild(descriptionElement);

      listItem.appendChild(indexElement);
      listItem.appendChild(content);

      listContainer.appendChild(listItem);
    });
  });
};

const changeShowTag = (event) => {
  const selectedYearTag = event.target.textContent;

  const yearRange = document.querySelectorAll(".publication__year-container");
  yearRange.forEach((member) => {
    const yearTag = member.getAttribute("year-range");

    if (yearTag === selectedYearTag || selectedYearTag === "All") {
      member.style.display = "block";
    } else {
      member.style.display = "none";
    }
  });

  const tags = document.querySelectorAll(".tag__item");
  tags.forEach((tag) => {
    tag.classList.toggle("selected", tag.textContent === selectedYearTag);
  });
};

const sheetName = "International Journal";
getExcelData(sheetName, function (data) {
  drawPublications(data);
});

const tags = document.querySelectorAll(".tag__item");

tags.forEach((tag) => {
  tag.addEventListener("click", changeShowTag);
});
