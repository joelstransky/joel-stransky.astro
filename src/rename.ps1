# Set the path to the folder containing the files
$folderPath = "C:\Users\stran\Documents\Work\joel-stransky.astro\src\content\articles"

# Get all files in the folder
$files = Get-ChildItem -Path $folderPath -Filter "*.mdx" -Recurse

# Iterate through each file
foreach ($file in $files) {
    # Check if it's a file (not a directory)
    if (-not $file.PSIsContainer) {
        # Get the filename and extension separately
        $fileName = $file.BaseName
        $extension = $file.Extension

        # Replace periods with dashes in the filename (except for the last one before the extension)
        $newFileName = $fileName -replace '\.(?!.{3}$)|_', '-'
        

        # Rename the file
        Rename-Item -Path $file.FullName -NewName "$fileName.md"
    }
}
