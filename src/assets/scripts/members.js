import { getExcelData } from "./getData";

const drawMembers = (members) => {
  const listContainer = document.querySelector(".members__list-container");

  members.forEach((member) => {
    const listItem = document.createElement("div");
    listItem.classList.add("members__list");

    const content = document.createElement("div");
    content.classList.add("members__list__content");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("members__list__content__image-container");

    const image = document.createElement("img");
    image.classList.add("members__list__content__image");
    const imageUrl = `https://drive.google.com/uc?export=view&id=${member.ImageID}`;
    image.src = imageUrl;
    image.alt = member.Name;

    imageContainer.appendChild(image);

    const textContainer = document.createElement("div");
    textContainer.classList.add("members__list__content__text-container");

    const rank = document.createElement("div");
    rank.classList.add("members__list__content__text-container__rank");
    rank.classList.add("font-bold");
    rank.textContent = member.Tag;

    const name = document.createElement("div");
    name.classList.add("members__list__content__text-container__name");
    name.classList.add("font-bold");
    name.textContent = member.Name;

    const topicContainer = document.createElement("div");
    topicContainer.classList.add("members__list__content__text-container__topic-container");

    const researchSubject = document.createElement("p");
    researchSubject.textContent = "Research Subject";

    const researchSubjectDetail = document.createElement("span");
    researchSubjectDetail.textContent = member["Research Subject"];

    topicContainer.appendChild(researchSubject);
    topicContainer.appendChild(researchSubjectDetail);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("members__list__content__text-container__contact-container");

    const phone = document.createElement("div");
    phone.classList.add("members__list__content__text-container__phone");

    const phoneIcon = document.createElement("i");
    phoneIcon.classList.add("fa-solid");
    phoneIcon.classList.add("fa-phone");

    const phoneNum = document.createElement("span");
    phoneNum.textContent = member.Phone;

    phone.appendChild(phoneIcon);
    phone.appendChild(phoneNum);

    const email = document.createElement("div");
    email.classList.add("members__list__content__text-container__email");

    const emailIcon = document.createElement("i");
    emailIcon.classList.add("fa-solid");
    emailIcon.classList.add("fa-envelope");

    const emailAddr = document.createElement("span");
    emailAddr.textContent = member.Email;

    email.appendChild(emailIcon);
    email.appendChild(emailAddr);

    contactContainer.appendChild(phone);
    contactContainer.appendChild(email);

    textContainer.appendChild(rank);
    textContainer.appendChild(name);
    textContainer.appendChild(topicContainer);
    textContainer.appendChild(contactContainer);

    content.appendChild(imageContainer);
    content.appendChild(textContainer);

    listItem.appendChild(content);

    listContainer.appendChild(listItem);
  });
};

const sheetName = "Members";
getExcelData(sheetName, function (data) {
  // 데이터 활용
  console.log(data);
  drawMembers(data);
});
