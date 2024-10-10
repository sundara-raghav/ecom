(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    
    
    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);

const productList = [
    { name: "Silk Saree", url: "C:\Users\DHARSHINI\Desktop\ecom\ecom\Silk-Saree.html" },
    { name: "Soft Silk Saree", url: "C:\Users\DHARSHINI\Desktop\ecom\ecom\Soft-Silk-Saree.html" },
    { name: "Cotton Saree", url: "C:\Users\DHARSHINI\Desktop\ecom\ecom\Cotton-Saree.html" },
    { name: "Banarasi Saree", url: "C:\Users\DHARSHINI\Desktop\ecom\ecom\Banarasi-Saree.html" },
    { name: "Mysore Silk Saree", url: "/mysore-silk-saree" },
    { name: "Kanjivaram Saree", url: "/kanjivaram-saree" },
    { name: "Chiffon Saree", url: "/chiffon-saree" },
    { name: "Kanjipuram Saree", url: "/kanjipuram-saree" }
];

document.getElementById('searchInput').addEventListener('input', function() {
    let input = this.value.toLowerCase();
    let autocompleteList = document.getElementById('autocompleteList');
    autocompleteList.innerHTML = '';

    if (!input) {
        return false;
    }

    productList.forEach(function(product) {
        if (product.name.toLowerCase().indexOf(input) !== -1) {
            let item = document.createElement('div');
            item.innerHTML = product.name;
            item.addEventListener('click', function() {
                // On selecting an item, go directly to the saree's page
                document.getElementById('searchInput').value = product.name;
                autocompleteList.innerHTML = '';
                window.location.href = product.url;
            });
            autocompleteList.appendChild(item);
        }
    });
});

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let query = document.getElementById('searchInput').value.toLowerCase();
    
    // Find the matching product in the productList
    let matchedProduct = productList.find(product => product.name.toLowerCase() === query);
    
    if (matchedProduct) {
        // Redirect to the matched product's specific page
        window.location.href = matchedProduct.url;
    } else {
        // If no specific match is found, redirect to a generic search results page
        window.location.href = '/search-results?query=' + encodeURIComponent(query);
    }
});


// const productList = [
//     "Silk Saree",
//     "Soft Silk Saree",
//     "Cotton Saree",
//     "Banarasi Saree",
//     "Mysore Silk Saree",
//     "Kanjivaram Saree",
//     "Chiffon Saree",
//     "Kanjipuram Saree"
// ];


// document.getElementById('searchInput').addEventListener('input', function() {
//     let input = this.value.toLowerCase();
//     let autocompleteList = document.getElementById('autocompleteList');
//     autocompleteList.innerHTML = '';

//     if (!input) {
//         return false;
//     }

//     productList.forEach(function(product) {
//         if (product.toLowerCase().indexOf(input) !== -1) {
//             let item = document.createElement('div');
//             item.innerHTML = product;
//             item.addEventListener('click', function() {
//                 document.getElementById('searchInput').value = product;
//                 autocompleteList.innerHTML = '';
//                 window.location.href = '/search-results?query=' + encodeURIComponent(product);
//             });
//             autocompleteList.appendChild(item);
//         }
//     });
// });

// document.getElementById('searchForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     let query = document.getElementById('searchInput').value;
//     if (query) {
//         window.location.href = '/search-results?query=' + encodeURIComponent(query);
//     }
// });
