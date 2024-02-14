// Extension ID of the extension you want to enable
var extensionId = "your_extension_id";

// Enable the extension with the given extensionId
chrome.management.setEnabled(extensionId, false, function() {
  if (chrome.runtime.lastError) {
    console.error("Error disabling extension: " + chrome.runtime.lastError.message);
  } else {
    console.log("Extension disabled successfully");
  }
});