const getDates = () => {
  const name = validateDataByNumbers("Введите имя");
  const surname = validateDataByNumbers("Введите фамилию");
  const experience = validateDataByString("Введите опыт работы в годах");
  const isDifficultProjects = confirm("Ваши проекты были сложные?");
  const isEnglish = confirm("Вы свободно говорите на английском?");
  const isAlgorithms = confirm("Ты знаешь Алгоритмы?");
  const isTeamManagement = confirm("Тебе нравится управлять командой?");
  const fullName = `${name} ${surname}`;

  return {
    fullName,
    experience,
    isDifficultProjects,
    isEnglish,
    isAlgorithms,
    isTeamManagement,
  };
};

const validateDataByString = (text) => {
  let result = prompt(text);

  while (!result || isNaN(result)) {
    alert("Вы ввели некорректные данные, попробуйте еще раз");
    result = prompt(text);
  }

  return +result;
};

const validateDataByNumbers = (text) => {
  let result = prompt(text);

  while (!result || !isNaN(result)) {
    alert("Вы ввели некорректные данные, попробуйте еще раз");
    result = prompt(text);
  }

  return result;
};

const gradiateDates = (
  experience,
  isEnglish,
  isDifficultProjects,
  isTeamManagement
) => {
  let grade = null;
  switch (true) {
    case experience > 2 && experience <= 5 && isEnglish:
      grade = "middle";
      break;
    case experience > 5 && isEnglish && isDifficultProjects:
      grade = "senior";
      break;
    case experience >= 10 &&
      isEnglish &&
      isDifficultProjects &&
      isTeamManagement:
      grade = "principal";
      break;
    default:
      grade = "junior";
  }

  return grade;
};

const sortSalaryByDates = (grade) => {
  let salary = null;
  switch (grade) {
    case "middle":
      salary = "от 1500$ до 2700$";
      break;
    case "senior":
      salary = "от 3000$";
      break;
    case "principal":
      salary = "от 7000$";
      break;
    default:
      salary = "от 300$ до 1500$";
  }
  return salary;
};

const chanceOfGetJob = (isEnglish, isDifficultProjects, isAlgorithms) => {
  let chance = null;

  switch (true) {
    case !isEnglish || !isAlgorithms:
      chance = "Шансов нет";
      break;
    case !isDifficultProjects:
      chance = "Шансов мало";
      break;
    default:
      chance = "Шансы есть";
  }

  return chance;
};

const showDates = (
  fullName,
  experience,
  graduation,
  salaryCheck,
  chanceWork
) => {
  alert(`
      Ваше Имя: ${fullName}
      Ваш опыт в годах: ${experience}
      Градация: ${graduation}
      Примерная зп: ${salaryCheck}
      Шансы попасть на работу в корпорацию: ${chanceWork}
    `);
};

const init = () => {
  const datesForWork = getDates();

  const graduation = gradiateDates(
    datesForWork.experience,
    datesForWork.isEnglish,
    datesForWork.isDifficultProjects,
    datesForWork.isTeamManagement
  );

  const salaryCheck = sortSalaryByDates(graduation);

  const chanceWork = chanceOfGetJob(
    datesForWork.isEnglish,
    datesForWork.isDifficultProjects,
    datesForWork.isAlgorithms
  );

  showDates(
    datesForWork.fullName,
    datesForWork.experience,
    graduation,
    salaryCheck,
    chanceWork
  );
};

init();
