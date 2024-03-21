const generateForm = document.querySelector(".generate-form");
const generateBtn = generateForm.querySelector(".generate-btn");
const imageGallery = document.querySelector(".image-gallery");

const OPENAI_API_KEY = "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"; 

let isImageGenerating = false;

const updateImageCard = (imgDataArray) => {
  imgDataArray.forEach((imgObject, index) => {
    const imgCard = document.createElement("div");
    imgCard.classList.add("img-card");
    imgCard.innerHTML = `
      <img src="data:image/jpeg;base64,${imgObject.b64_json}" alt="AI generated image">
      <a class="download-btn" href="data:image/jpeg;base64,${imgObject.b64_json}" download="${new Date().getTime()}.jpg">
        <img src="dn.jpg" alt="download icon">
      </a>
    `;
    imageGallery.appendChild(imgCard);
  });
};

const generateAiImages = async (userPrompt, userImgQuantity) => {
  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: userPrompt,
        n: parseInt(userImgQuantity),
        size: "512x512",
        response_format: "b64_json"
      }),
    });

    if (!response.ok) throw new Error("Failed to generate AI images. Make sure your API key is valid.");

    const { data } = await response.json();
    updateImageCard([...data]);
  } catch (error) {
    alert(error.message);
  } finally {
    generateBtn.removeAttribute("disabled");
    generateBtn.innerText = "Generate";
    isImageGenerating = false;
  }
};

const handleImageGeneration = (e) => {
  e.preventDefault();
  if (isImageGenerating) return;

  const userPrompt = e.target.querySelector(".prompt-input").value;
  const userImgQuantity = parseInt(e.target.querySelector(".img-quantity").value);

  generateBtn.setAttribute("disabled", true);
  generateBtn.innerText = "Generating";
  isImageGenerating = true;

  imageGallery.innerHTML = ""; // Clear existing images
  generateAiImages(userPrompt, userImgQuantity);
};

generateForm.addEventListener("submit", handleImageGeneration);
