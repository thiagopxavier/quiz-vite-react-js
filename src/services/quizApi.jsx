const QUIZ_API_URL = "https://quiz-api-orpin.vercel.app/themes";

export async function fetchQuizData() {
  const response = await fetch(QUIZ_API_URL);
  const data = await response.json();
  return data;
};
