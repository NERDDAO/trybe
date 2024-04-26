export const updateTokenMetadata = async () => {
  const options = { method: "GET" };

  fetch("https://metadata.syndicate.io/84532/0xF1a56d622a4d3Fc2d0Db3742B1f945B05665b650/0", options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};

export const fetchTokenMetadata = async () => {
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
  //
};
