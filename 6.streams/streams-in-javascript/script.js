try {
    const reponse = await fetch("http://localhost:8000/");
    const result = await reponse.text();

    console.log(result);
} catch (error) {
    console.log(error.message)
}