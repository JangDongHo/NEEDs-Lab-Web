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
    "2015~2019": [],
    "2006~2014": [],
  };

  // 데이터를 년도 범위에 따라 분류
  data.forEach((item) => {
    let { Date } = item;
    Date = parseInt(Date.split("-")[0]);

    if (Date >= 2020) {
      yearRanges["2020~"].push(item);
    } else if (Date >= 2015) {
      yearRanges["2015~2019"].push(item);
    } else {
      yearRanges["2006~2014"].push(item);
    }
  });

  Object.entries(yearRanges).forEach(([yearRange, items]) => {
    const yearContainer = createPublicationContainer(yearRange);
    publicationContainer.appendChild(yearContainer);

    const listContainer = yearContainer.querySelector(
      ".publication__list-container"
    );

    // 아이템별로 리스트 생성
    const length = items.length;
    items.forEach((item, index) => {
      let { ImageID, Title, Inventor, Number, Date, Country } = item;

      const listItem = document.createElement("div");
      listItem.classList.add("publication__list");

      const indexElement = document.createElement("div");
      indexElement.classList.add("publication__list-index");
      indexElement.textContent = (length - index).toString();

      const imageElement = document.createElement("img");
      imageElement.classList.add("publication__list-image");
      imageElement.src = `https://drive.google.com/uc?export=view&id=${ImageID}`;

      const content = document.createElement("div");
      content.classList.add("publication__list-content");

      const titleElement = document.createElement("h4");
      titleElement.classList.add("title");
      titleElement.innerHTML = `${Title}`;

      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("description");
      Inventor = Inventor.split("|").join(", ");
      Number = String(Number).replace(/0+$/, "");
      if (!Country) {
        Country = "대한민국";
        Number = Number.slice(0, 2) + "-" + Number.slice(2);
      }
      descriptionElement.innerHTML = `${Inventor}<br>${Country} 특허 ${Number} (${Date})`;

      content.appendChild(titleElement);
      content.appendChild(descriptionElement);

      listItem.appendChild(indexElement);
      listItem.appendChild(imageElement);
      listItem.appendChild(content);

      listContainer.appendChild(listItem);
    });
  });
};

const changeShowTag = (event) => {
  const selectedYearTag = event.target.textContent;

  const yearRange = document.querySelectorAll(".publication__year-container");
  yearRange.forEach((container) => {
    const yearTag = container.getAttribute("year-range");

    if (yearTag === selectedYearTag || selectedYearTag === "All") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });

  const tags = document.querySelectorAll(".tag__item");
  tags.forEach((tag) => {
    tag.classList.toggle("selected", tag.textContent === selectedYearTag);
  });
};

const sheetName = "Patent";
getExcelData(sheetName, function (data) {
  drawPublications(data);
});

const tags = document.querySelectorAll(".tag__item");

tags.forEach((tag) => {
  tag.addEventListener("click", changeShowTag);
});
