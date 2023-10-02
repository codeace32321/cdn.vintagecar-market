
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll('form[ms-code-file-upload="form"]');
    
    forms.forEach((form) => {
        form.setAttribute('enctype', 'multipart/form-data');
        const uploadInputs = form.querySelectorAll('[ms-code-file-upload-input]');
        
        uploadInputs.forEach((uploadInput) => {
            const inputName = uploadInput.getAttribute('ms-code-file-upload-input');
            
            const fileInput = document.createElement('input');
            fileInput.setAttribute('type', 'file');
            fileInput.setAttribute('name', inputName);
            fileInput.setAttribute('id', inputName);
            
            // Append the dynamically created file input to the container
            uploadInput.appendChild(fileInput);
            
            if (inputName === 'fileToUpload') {
                // Handle special behavior for the thumbnail input
                const previewImage = document.getElementById('preview-img');
                
                fileInput.addEventListener('change', function () {
                    const file = fileInput.files[0];
                    
                    if (file) {
                        const reader = new FileReader();
                        
                        reader.onload = function (e) {
                            previewImage.src = e.target.result;
                        };
                        
                        reader.readAsDataURL(file);
                    } else {
                        previewImage.src = ''; // Clear the preview if no file is selected
                    }
                });
            } else {
                // Handle behavior for other inputs (non-thumbnail)
                const previewImage = document.createElement('img');
                previewImage.setAttribute('id', 'preview-' + inputName);
                
                // Append the dynamically created image element for preview
                uploadInput.appendChild(previewImage);
                
                fileInput.addEventListener('change', function () {
                    const file = fileInput.files[0];
                    const previewId = 'preview-' + inputName;
                    const previewImage = document.getElementById(previewId);
                    
                    if (file) {
                        const reader = new FileReader();
                        
                        reader.onload = function (e) {
                            previewImage.src = e.target.result;
                        };
                        
                        reader.readAsDataURL(file);
                    } else {
                        previewImage.src = ''; // Clear the preview if no file is selected
                    }
                });
            }
        });
    });
});




// Get the select element by its ID
var selectElement = document.getElementById("year-picker");

// Start from 2023 and go down to 1903
for (var year = 2023; year >= 1903; year--) {
// Create an option element
var option = document.createElement("option");

// Set the text and value of the option
option.text = year;
option.value = year;

// Append the option to the select element
selectElement.appendChild(option);
}


// Get the select element by its ID
var selectElement = document.getElementById("make-picker");

// List of makes change or add makes
var makes = [
"Acura",
"Alfa Romeo",
"Aston Martin",
"Audi",
"Bentley",
"BMW",
"Bugatti",
"Buick",
"Cadillac",
"Chevrolet",
"Chrysler",
"Citroën",
"Dodge",
"Ferrari",
"Fiat",
"Ford",
"Genesis",
"GMC",
"Honda",
"Hyundai"
];

// change the value of 20, if you add 100 makes change the value to 100
for (var i = 0; i < 20; i++) {
var make = makes[i];
// Create an option element
var option = document.createElement("option");

// Set the text and value of the option
option.text = make;
option.value = make;

// Append the option to the select element
selectElement.appendChild(option);
}

function updatePreview() {
// Get the value of the input elements
var vehiclePicker = document.getElementById('vehicle-picker');
var vehiclePickerPreview = document.getElementById('vehicle-preview');

var listingName = document.getElementById('Listing-name');
var listingPreview = document.getElementById('Listing-name-preview');

var Price = document.getElementById('Price');
var PricePreview = document.getElementById('Price-preview');

var shortDescription = document.getElementById('Short-description');
var shortDescriptionPreview = document.getElementById('Short-description-preview');    

var yearPicker = document.getElementById('year-picker');
var yearPickerPreview = document.getElementById('year-preview');

var makePicker = document.getElementById('make-picker');
var makePickerPreview = document.getElementById('make-preview');

var modelPicker = document.getElementById('model-picker');
var modelPickerPreview = document.getElementById('model-preview');

var mileagePicker = document.getElementById('mileage-picker');
var mileagePickerPreview = document.getElementById('mileage-preview');

// Update the preview section with the input values
vehiclePickerPreview.textContent = vehiclePicker.value;
listingPreview.textContent = listingName.value;
PricePreview.textContent = Price.value;
shortDescriptionPreview.textContent = shortDescription.value;
yearPickerPreview.textContent = yearPicker.value;
makePickerPreview.textContent = makePicker.value;
modelPickerPreview.textContent = modelPicker.value;
mileagePickerPreview.textContent = mileagePicker.value;
}


document.addEventListener('DOMContentLoaded', function() {
var vehiclePicker = document.getElementById('vehicle-picker');
var listingName = document.getElementById('Listing-name');
var Price = document.getElementById('Price');
var shortDescription = document.getElementById('Short-description');
var yearPicker = document.getElementById('year-picker');
var makePicker = document.getElementById('make-picker');
var modelPicker = document.getElementById('model-picker');
var mileagePicker = document.getElementById('mileage-picker');



// Update the preview whenever the input changes
vehiclePicker.addEventListener('input', updatePreview);
listingName.addEventListener('input', updatePreview);
Price.addEventListener('input', updatePreview);
shortDescription.addEventListener('input', updatePreview);
yearPicker.addEventListener('input', updatePreview);
makePicker.addEventListener('input', updatePreview);
modelPicker.addEventListener('input', updatePreview);
mileagePicker.addEventListener('input', updatePreview);

updatePreview();
});
