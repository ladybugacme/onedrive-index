const isHiddenFolder = (driveItem: any) => {
  // Check if the file name exactly matches any of the predefined names
  if (driveItem.file && /(.password)/i.test(driveItem.name)) {
    return true;
  }

  // Check if the folder name exactly matches the hidden folder name
  if (!driveItem.file && /^(Apps)$/i.test(driveItem.name)) {
    return true;
  }

  return false; // If not a hidden folder
}

export default isHiddenFolder;
