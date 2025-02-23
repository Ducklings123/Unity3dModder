// ui.js
document.getElementById('uploadButton').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        extractUnity3DFile(file).then((unity3dData) => {
            displayAssets(unity3dData.assets);
        });
    }
});

function displayAssets(assets) {
    const assetList = document.getElementById('assetList');
    assetList.innerHTML = ''; // Clear previous list
    assets.forEach((asset) => {
        const assetItem = document.createElement('li');
        assetItem.textContent = `${asset.name} (${asset.type})`;
        assetList.appendChild(assetItem);

        // Create buttons for each asset type to modify
        const modifyButton = document.createElement('button');
        modifyButton.textContent = `Modify ${asset.name}`;
        modifyButton.addEventListener('click', () => {
            const newTexture = prompt("Enter new texture data:");
            if (newTexture) {
                modifyTexture(asset, newTexture);
            }
        });
        assetItem.appendChild(modifyButton);
    });
}

// Trigger download after modification
document.getElementById('downloadButton').addEventListener('click', () => {
    const modifiedAssets = getModifiedAssets(); // Get modified assets
    repackUnityFile(modifiedAssets);
});

function getModifiedAssets() {
    // This function would return the list of modified assets. For now, we just return a dummy array.
    return [
        { name: "Texture1", type: "texture", data: "newTextureData" },
        { name: "Mesh1", type: "mesh", data: "newMeshData" }
    ];
}
