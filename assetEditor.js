// assetEditor.js
function modifyTexture(assetData, newTexture) {
    if (assetData.type === "texture") {
        assetData.data = newTexture; // Replace texture data with the new texture
        console.log(`Texture modified: ${assetData.name}`);
    } else {
        console.error("The asset is not a texture.");
    }
    return assetData; // Return the modified asset
}

function modifyMaterial(assetData, newMaterial) {
    if (assetData.type === "material") {
        assetData.data = newMaterial; // Replace material data
        console.log(`Material modified: ${assetData.name}`);
    } else {
        console.error("The asset is not a material.");
    }
    return assetData; // Return the modified asset
}
