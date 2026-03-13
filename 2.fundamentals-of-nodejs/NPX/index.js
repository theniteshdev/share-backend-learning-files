async function getting() {
    try {
        const response = await fetch(
            "https://tagmango.com/assets/1735220875510/video_1/seg-570.m4s",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: "nitesh.dev@proton.me",
                    username: "nitesh.dev"
                })
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Server Response:", data);

    } catch (error) {
        console.error("Something went wrong:", error.message);
    }
};

getting();