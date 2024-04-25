export const hello4World = inngest.createFunction(
  { id: "hello4-world" },
  { event: "test/hello4.world" },
  async ({ event, step }) => {
    // fetch a single cast
    //const hash = event.data.castId;
    // const options = {
    // method: "GET",
    // headers: { accept: "application/json", api_key: process.env.NEYNAR_API_KEY || "" },
    //};

    //const query = await fetch(`https://api.neynar.com/v2/farcaster/cast?identifier=${hash}&type=hash`, options);
    // const response = await query.json();
    //if (!response) {
    //return { event, body: `"No response from cast ${hash}"` };
    //}

    const userPrompt = `"subject: ${event.data.prompt}"`;
    const haikiput: Haikipu = {
      title: "",
      id: event.data.fid,
      address: event.data.fid,
      timestamp: Date.now().toString(),
      type: "Trybe Haikus",
      contextSummary: "You write haikus and weave them coherently, this is a special haiku for the Trybe",
      haiku: "",
      explainer: "",
    };
    const hk = await hAIku(haikiput, systemPrompt, assistantPrompt, userPrompt);
    //replicate
    console.log(hk);
    const output = await fetch("http://127.0.0.1:8000/generate/description-mode", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Create a descriptive song setting a scene ${hk.explainer.summary}`,
        gpt_description_prompt: hk.haiku,
        make_instrumental: false,
        mv: "chirp-v3-0",
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error("Error:", error);
      });
    console.log(output);

    const options = {
      method: "POST",
      headers: { Authorization: "Bearer <token>", "Content-Type": "application/json" },
      body: '{"type":"json","content":"<any>"}',
    };

    fetch("https://api.syndicate.io/token-metadata/update/{projectId}/{chainId}/{tokenAddress}/{tokenId}", options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    //=> "https://replicate.delivery/pbxt/HuWYFtJyyH50BxruGu1XfUle...
    return { event, body: `"Message ${output}"` };
  },
);
