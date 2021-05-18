function createQuestion(){
    const data = axios.get("https://opentdb.com/api.php?amount=50&type=multiple");
    console.log(data);
}

createQuestion();