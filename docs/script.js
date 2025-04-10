// Main initialization function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initTabs();
    initScrollReveal();
    initNavbarScroll();
    initSmoothScroll();
    initTestimonialSlider();
    initAnimations();
    initParallaxEffect();
    setupEnhancedParallax();
    setupSectionHighlighting();
    
    // Initialize analyzer components
    initAnalyzerTabs();
    initFinancialTabs();
    initTimeframeTabs();
    
    // Initialize charts
    initCharts();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize paper trading simulator
    initPaperTrading();
    
    // Initialize chatbot enhancements
    initChatbot();
    enhanceChatbotExperience();
    
    // Performance optimization for animations
    // Only animate sections when they're in the viewport
    function setupPerformanceOptimizations() {
        const sections = document.querySelectorAll('section');
        const options = {
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add class when section is in view
                    entry.target.classList.add('in-view');
                } else {
                    // Remove class when section is out of view (for better performance)
                    entry.target.classList.remove('in-view');
                }
            });
        }, options);
        
        sections.forEach(section => {
            observer.observe(section);
        });
    }
    
    // Call performance optimizations function
    setupPerformanceOptimizations();
});

// Reveal elements on scroll
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);
}

// Navbar scroll effect
function initNavbarScroll() {
    const header = document.querySelector('header.glass-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.querySelector('.overlay').classList.remove('active');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Company analyzer tabs
function initAnalyzerTabs() {
    const tabButtons = document.querySelectorAll('.analyzer-tab');
    const tabPanels = document.querySelectorAll('.analyzer-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to current button
            this.classList.add('active');
            
            // Activate corresponding panel
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Financial tabs (quarterly/annual)
function initFinancialTabs() {
    const financialTabs = document.querySelectorAll('.financial-tab');
    const financialTables = document.querySelectorAll('.financial-table');
    
    financialTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and tables
            financialTabs.forEach(t => t.classList.remove('active'));
            financialTables.forEach(table => table.classList.remove('active'));
            
            // Add active class to current tab
            this.classList.add('active');
            
            // Activate corresponding table
            const tableId = this.getAttribute('data-financials');
            document.getElementById(tableId + '-reports').classList.add('active');
        });
    });
}

// Chart timeframe tabs
function initTimeframeTabs() {
    const timeframeBtns = document.querySelectorAll('.timeframe-btn');
    const chartDisplays = document.querySelectorAll('.chart-display');
    
    timeframeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and charts
            timeframeBtns.forEach(b => b.classList.remove('active'));
            chartDisplays.forEach(chart => chart.classList.remove('active'));
            
            // Add active class to current button
            this.classList.add('active');
            
            // Activate corresponding chart
            const timeframeId = this.getAttribute('data-timeframe');
            document.getElementById(timeframeId + '-chart').classList.add('active');
        });
    });
}

// Mobile menu
function initMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu i');
    const mobileMenuElement = document.querySelector('.mobile-menu');
    
    // Create overlay element if it doesn't exist
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    }
    
    // Create mobile menu if it doesn't exist
    if (!document.querySelector('.mobile-menu-container')) {
        const mobileMenuContainer = document.createElement('div');
        mobileMenuContainer.className = 'mobile-menu-container';
        
        mobileMenuContainer.innerHTML = `
            <div class="mobile-menu-close">
                <i class="fas fa-times"></i>
            </div>
            <ul class="mobile-menu-links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#learn">Learn</a></li>
                <li><a href="#interactive">Interactive</a></li>
                <li><a href="#start">Get Started</a></li>
            </ul>
            <div class="mobile-menu-buttons">
                <a href="#start" class="neon-btn btn-primary">Sign Up Free</a>
            </div>
        `;
        
        document.body.appendChild(mobileMenuContainer);
        
        // Add event listener to close button
        document.querySelector('.mobile-menu-close').addEventListener('click', function() {
            mobileMenuContainer.classList.remove('active');
            overlay.classList.remove('active');
        });
        
        // Add event listeners to mobile menu links for closing menu after click
        document.querySelectorAll('.mobile-menu-links a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuContainer.classList.remove('active');
                overlay.classList.remove('active');
            });
        });
    }
    
    const mobileMenuContainer = document.querySelector('.mobile-menu-container');
    
    // Toggle mobile menu
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            mobileMenuContainer.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }
    
    // Close menu when clicking on overlay
    overlay.addEventListener('click', function() {
        mobileMenuContainer.classList.remove('active');
        this.classList.remove('active');
    });
}

// Initialize Chart.js charts
function initCharts() {
    // Only proceed if Chart.js is loaded and we have the canvases
    if (typeof Chart === 'undefined') return;
    
    // Monthly candle chart
    const monthlyCtx = document.getElementById('monthly-candle-chart');
    if (monthlyCtx) {
        // Sample data for monthly candle chart (12 months)
        const monthlyLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthlyData = [
            { o: 170.33, h: 182.94, l: 167.54, c: 178.44 }, // Jan
            { o: 178.39, h: 179.99, l: 164.30, c: 165.12 }, // Feb
            { o: 165.31, h: 181.47, l: 162.14, c: 177.97 }, // Mar
            { o: 177.50, h: 183.57, l: 163.53, c: 173.57 }, // Apr
            { o: 173.60, h: 184.95, l: 171.37, c: 180.95 }, // May
            { o: 180.69, h: 194.48, l: 175.80, c: 193.97 }, // Jun
            { o: 193.55, h: 198.23, l: 189.25, c: 196.45 }, // Jul
            { o: 196.24, h: 196.73, l: 172.31, c: 188.85 }, // Aug
            { o: 188.28, h: 189.98, l: 170.24, c: 172.40 }, // Sep
            { o: 173.80, h: 179.25, l: 165.67, c: 176.65 }, // Oct
            { o: 176.95, h: 191.56, l: 175.08, c: 189.37 }, // Nov
            { o: 189.89, h: 198.23, l: 181.56, c: 193.92 }  // Dec
        ];
        
        createCandleChart(monthlyCtx, monthlyLabels, monthlyData);
        
        // Add hover effect to show candle details
        setupCandleHover(monthlyCtx, monthlyLabels, monthlyData);
    }
    
    // Decade candle chart
    const decadeCtx = document.getElementById('decade-candle-chart');
    if (decadeCtx) {
        // Sample data for decade chart (10 years)
        const decadeLabels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
        const decadeData = [
            { o: 28.57, h: 30.05, l: 23.04, c: 27.63 },  // 2014 (adjusted for splits)
            { o: 27.59, h: 33.19, l: 25.16, c: 26.31 },  // 2015
            { o: 26.42, h: 29.32, l: 22.85, c: 28.95 },  // 2016
            { o: 29.03, h: 43.89, l: 28.95, c: 42.30 },  // 2017
            { o: 42.54, h: 58.37, l: 36.11, c: 39.44 },  // 2018
            { o: 39.63, h: 73.42, l: 38.26, c: 73.41 },  // 2019
            { o: 74.06, h: 137.98, l: 53.15, c: 132.69 }, // 2020
            { o: 133.52, h: 182.13, l: 128.86, c: 177.57 }, // 2021
            { o: 177.83, h: 182.94, l: 124.17, c: 129.93 }, // 2022
            { o: 130.28, h: 198.23, l: 124.17, c: 193.92 }  // 2023
        ];
        
        createCandleChart(decadeCtx, decadeLabels, decadeData);
    }
    
    // Dividend history chart
    const dividendCtx = document.getElementById('dividend-chart');
    if (dividendCtx) {
        const dividendYears = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];
        const dividendData = [0.63, 0.73, 0.77, 0.82, 0.88, 0.92, 0.96]; // Annual dividends per share
        
        new Chart(dividendCtx, {
            type: 'bar',
            data: {
                labels: dividendYears,
                datasets: [{
                    label: 'Dividend per Share ($)',
                    data: dividendData,
                    backgroundColor: 'rgba(13, 255, 132, 0.5)',
                    borderColor: 'rgba(13, 255, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#ABABAB'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#ABABAB'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#E2E2E2'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `$${context.raw}`;
                            }
                        }
                    }
                }
            }
        });
    }
}

// Create a candlestick chart using Chart.js
function createCandleChart(ctx, labels, data) {
    // Extract OHLC data for chart
    const opens = data.map(item => item.o);
    const highs = data.map(item => item.h);
    const lows = data.map(item => item.l);
    const closes = data.map(item => item.c);
    
    // Determine colors based on price movement (green for up, red for down)
    const colors = data.map(item => item.c >= item.o ? 'rgba(13, 255, 132, 1)' : 'rgba(255, 58, 94, 1)');
    const backgroundColors = data.map(item => item.c >= item.o ? 'rgba(13, 255, 132, 0.2)' : 'rgba(255, 58, 94, 0.2)');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Stock Price',
                data: closes,
                backgroundColor: backgroundColors,
                borderColor: colors,
                borderWidth: 2,
                // Custom candle properties
                opens: opens,
                highs: highs,
                lows: lows,
                closes: closes
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    ticks: {
                        color: '#ABABAB'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        color: '#ABABAB'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(tooltipItems) {
                            return labels[tooltipItems[0].dataIndex];
                        },
                        label: function(context) {
                            const dataIndex = context.dataIndex;
                            const dataset = context.dataset;
                            return [
                                `Open: $${dataset.opens[dataIndex].toFixed(2)}`,
                                `High: $${dataset.highs[dataIndex].toFixed(2)}`,
                                `Low: $${dataset.lows[dataIndex].toFixed(2)}`,
                                `Close: $${dataset.closes[dataIndex].toFixed(2)}`
                            ];
                        }
                    }
                }
            }
        },
        plugins: [{
            // Custom plugin to draw candlestick wicks
            afterDatasetsDraw: function(chart) {
                const ctx = chart.ctx;
                chart.data.datasets.forEach((dataset, i) => {
                    const meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach((element, index) => {
                            // Draw the wick line from low to high
                            const vm = element.getProps(['x', 'y', 'width']);
                            const halfWidth = vm.width / 2;
                            
                            const open = dataset.opens[index];
                            const high = dataset.highs[index];
                            const low = dataset.lows[index];
                            const close = dataset.closes[index];
                            
                            const yHigh = chart.scales.y.getPixelForValue(high);
                            const yLow = chart.scales.y.getPixelForValue(low);
                            
                            ctx.save();
                            ctx.strokeStyle = dataset.borderColor[index];
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(vm.x, yHigh);
                            ctx.lineTo(vm.x, yLow);
                            ctx.stroke();
                            ctx.restore();
                        });
                    }
                });
            }
        }]
    });
}

// Setup hover functionality to show candle details
function setupCandleHover(canvasElement, labels, data) {
    const candleInfoOverlay = document.querySelector('.candle-info-overlay');
    const candleDate = document.getElementById('candle-date');
    const candleOpen = document.getElementById('candle-open');
    const candleHigh = document.getElementById('candle-high');
    const candleLow = document.getElementById('candle-low');
    const candleClose = document.getElementById('candle-close');
    const candleVolume = document.getElementById('candle-volume');
    
    // Sample volume data (in millions)
    const volumes = [78.4, 89.7, 92.3, 76.5, 65.8, 102.3, 114.6, 82.9, 76.3, 69.5, 105.8, 98.2];
    
    canvasElement.addEventListener('mousemove', function(event) {
        const chart = Chart.getChart(canvasElement);
        const points = chart.getElementsAtEventForMode(event, 'nearest', { intersect: true }, false);
        
        if (points.length > 0) {
            const index = points[0].index;
            
            // Update candle info
            candleDate.textContent = labels[index] + ' 2023';
            candleOpen.textContent = '$' + data[index].o.toFixed(2);
            candleHigh.textContent = '$' + data[index].h.toFixed(2);
            candleLow.textContent = '$' + data[index].l.toFixed(2);
            candleClose.textContent = '$' + data[index].c.toFixed(2);
            candleVolume.textContent = volumes[index] + 'M';
            
            // Show the overlay
            candleInfoOverlay.style.display = 'block';
        }
    });
    
    canvasElement.addEventListener('mouseout', function() {
        // Hide the overlay when mouse leaves the chart
        candleInfoOverlay.style.display = 'none';
    });
}

// Header scroll effect
function initNavbar() {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Tabs functionality for demo section
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Testimonial slider functionality
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    
    // Show only the first testimonial initially
    testimonials.forEach((testimonial, index) => {
        testimonial.style.display = index === 0 ? 'block' : 'none';
    });
    
    // Setup dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            goToSlide(index);
        });
    });
    
    // Auto-advance the slider every 5 seconds
    setInterval(nextSlide, 5000);
    
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        goToSlide(nextIndex);
    }
    
    function goToSlide(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the selected testimonial and activate corresponding dot
        testimonials[index].style.display = 'block';
        dots[index].classList.add('active');
        
        // Update current index
        currentIndex = index;
    }
}

// Animations and other effects
function initAnimations() {
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-card, .feature-card, .contact-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (elementPosition < screenPosition * 0.8) {
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check on page load
    animateOnScroll();
    
    // Check for elements to animate on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get the form data
            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simple validation
            if (form.checkValidity()) {
                // Here you would typically send the data to your server
                console.log('Form submitted:', formValues);
                
                // Show a success message
                const successMessage = document.createElement('div');
                successMessage.className = 'form-success';
                successMessage.innerHTML = '<p>Thanks for your submission! We\'ll be in touch soon.</p>';
                
                // Reset the form
                form.reset();
                
                // Add the success message after the form
                form.parentNode.appendChild(successMessage);
                
                // Remove the success message after 3 seconds
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });
    });
}

// Initialize parallax scrolling effect
function initParallaxEffect() {
    // Create parallax elements for each section that needs a parallax effect
    const sections = ['hero', 'features', 'learn', 'interactive', 'start'];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        
        // Skip if the section already has parallax elements
        if (section.querySelector('.parallax-bg')) return;
        
        // Create the parallax background element
        const parallaxBg = document.createElement('div');
        parallaxBg.className = 'parallax-bg';
        
        // Set different parallax speeds based on section
        let parallaxSpeed = 0.5; // Default speed
        
        switch(sectionId) {
            case 'hero':
                parallaxSpeed = 0.3;
                break;
            case 'features':
                parallaxSpeed = 0.4;
                break;
            case 'learn':
                parallaxSpeed = 0.5;
                break;
            case 'interactive':
                parallaxSpeed = 0.35;
                break;
            case 'start':
                parallaxSpeed = 0.25;
                break;
        }
        
        // Store the speed as a data attribute
        parallaxBg.dataset.speed = parallaxSpeed;
        
        // Create the parallax content container if it doesn't exist
        let contentWrapper = section.querySelector('.container');
        if (contentWrapper) {
            // If there's a container, just add the parallax-content class
            contentWrapper.classList.add('parallax-content');
        } else {
            // Create a new content wrapper if there isn't one
            contentWrapper = document.createElement('div');
            contentWrapper.className = 'parallax-content';
            
            // Move all the elements from the section to the content wrapper
            while (section.firstChild) {
                contentWrapper.appendChild(section.firstChild);
            }
            
            section.appendChild(contentWrapper);
        }
        
        // Insert the parallax background as the first child
        section.insertBefore(parallaxBg, section.firstChild);
        
        // Add scroll indicator to every section except the last one
        if (sectionId !== 'start') {
            const scrollIndicator = document.createElement('div');
            scrollIndicator.className = 'scroll-indicator';
            section.appendChild(scrollIndicator);
        }
    });
    
    // Setup enhanced parallax effect
    setupEnhancedParallax();
}

// Setup enhanced parallax effect with scroll-based animations
function setupEnhancedParallax() {
    const sections = document.querySelectorAll('section');
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    let lastScrollY = window.pageYOffset;
    let ticking = false;
    
    // Section color transition effect - more dramatic color shifts between sections
    const sectionColors = {
        'hero': { primary: '13, 255, 132', secondary: '88, 101, 242' },
        'features': { primary: '255, 58, 94', secondary: '13, 255, 132' },
        'learn': { primary: '88, 101, 242', secondary: '255, 115, 0' },
        'interactive': { primary: '255, 115, 0', secondary: '13, 255, 132' },
        'start': { primary: '13, 255, 132', secondary: '0, 180, 100' }
    };
    
    // Add color overlay to each section with more dramatic effects
    sections.forEach(section => {
        if (!section.querySelector('.color-transition-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'color-transition-overlay';
            overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                opacity: 0;
                z-index: 1;
                mix-blend-mode: color-dodge;
                transition: opacity 0.2s ease, background 0.3s ease;
            `;
            section.appendChild(overlay);
        }
    });
    
    // Get visible sections based on scroll position
    function getVisibleSections() {
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.pageYOffset;
        
        return Array.from(sections).map(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + scrollPosition;
            const sectionHeight = rect.height;
            
            // Calculate visibility percentage
            let visibilityPercentage = 0;
            
            if (scrollPosition + viewportHeight >= sectionTop && 
                scrollPosition <= sectionTop + sectionHeight) {
                
                const visibleTop = Math.max(sectionTop, scrollPosition);
                const visibleBottom = Math.min(sectionTop + sectionHeight, scrollPosition + viewportHeight);
                const visibleHeight = visibleBottom - visibleTop;
                
                visibilityPercentage = visibleHeight / viewportHeight;
            }
            
            // Calculate progress (0 when entering viewport, 1 when leaving)
            // Use a more precise calculation for more dramatic effect
            const progress = (scrollPosition - sectionTop + viewportHeight) / (sectionHeight + viewportHeight);
            
            return {
                section,
                sectionId: section.id,
                visibilityPercentage,
                progress,
                scrollPosition,
                sectionTop,
                sectionHeight,
                viewportHeight,
                // Calculate relative scroll position within the section
                relativeScrollPos: (scrollPosition - sectionTop) / sectionHeight
            };
        });
    }
    
    // Create a more dramatic wobble effect based on scroll
    function getWobbleTransform(progress, intensity = 1) {
        const angle = Math.sin(progress * Math.PI * 2) * (1.5 * intensity);
        return `rotate(${angle}deg)`;
    }
    
    // Update parallax effects based on scroll position
    function updateParallax() {
        const visibleSections = getVisibleSections();
        const scrollPosition = window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const scrollVelocity = scrollPosition - lastScrollY;
        lastScrollY = scrollPosition;
        
        // Update each section
        visibleSections.forEach((sectionData) => {
            const {section, sectionId, visibilityPercentage, progress, relativeScrollPos} = sectionData;
            const bg = section.querySelector('.parallax-bg');
            const overlay = section.querySelector('.color-transition-overlay');
            const container = section.querySelector('.parallax-content');
            
            if (!bg || !overlay) return;
            
            // Only process if the section is at least somewhat visible or nearby
            if (visibilityPercentage > 0 || 
                (section.getBoundingClientRect().top < viewportHeight * 1.5 && 
                 section.getBoundingClientRect().bottom > -viewportHeight * 0.5)) {
                
                const speed = parseFloat(bg.dataset.speed) || 0.5;
                let transform = '';
                let scale = 1;
                
                // Update color overlay based on progress - more dramatic
                const colors = sectionColors[sectionId];
                if (colors) {
                    // Stronger intensity for more dramatic effect
                    const gradientIntensity = Math.sin(progress * Math.PI) * 0.3; 
                    overlay.style.opacity = gradientIntensity;
                    
                    // Animated gradient with scroll position - more dynamic
                    const gradientPos = Math.max(0, Math.min(100, progress * 100));
                    const gradientSize = 80 + Math.sin(progress * Math.PI) * 30;
                    
                    // Use velocity to affect the gradient direction
                    const velocityDirection = scrollVelocity > 0 ? 'to bottom' : 'to top';
                    
                    overlay.style.background = `
                        radial-gradient(
                            circle at ${gradientPos}% 50%, 
                            rgba(${colors.primary}, ${gradientIntensity}), 
                            rgba(${colors.secondary}, ${gradientIntensity * 0.7}) ${gradientSize}%, 
                            transparent ${gradientSize + 30}%
                        ),
                        linear-gradient(
                            ${velocityDirection},
                            rgba(${colors.primary}, ${Math.abs(scrollVelocity) * 0.001}),
                            transparent 70%
                        )
                    `;
                }
                
                // Add a 3D rotation effect to content based on scroll and mouse position
                if (container) {
                    // Pulse scale effect synchronized with scroll
                    const pulseScale = 1 + Math.sin(progress * Math.PI * 2) * 0.01;
                    
                    // Apply subtle 3D rotation based on scroll - more dramatic on fast scrolls
                    const velocity3DEffect = Math.min(5, Math.abs(scrollVelocity) * 0.01);
                    const rotateX = scrollVelocity > 0 ? -velocity3DEffect : velocity3DEffect;
                    
                    // Apply 3D effect with subtle scale
                    container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) scale(${pulseScale})`;
                    container.style.transition = Math.abs(scrollVelocity) > 10 ? 'transform 0.2s ease-out' : 'transform 0.4s ease-out';
                }
                
                // More dramatic section-specific effects
                switch(sectionId) {
                    case 'hero':
                        // Enhanced parallax for hero section - zoom out and rotate slightly
                        const heroRotation = Math.sin(progress * Math.PI) * 2.5;
                        const heroYOffset = -progress * 200 * speed;
                        transform = `translate3d(0, ${heroYOffset}px, 0) rotate(${heroRotation}deg)`;
                        scale = 1.3 - (progress * 0.4);
                        
                        // Add velocity-based effect
                        if (Math.abs(scrollVelocity) > 5) {
                            const velocityEffect = Math.min(15, Math.abs(scrollVelocity) * 0.1);
                            const velocityDir = scrollVelocity > 0 ? -1 : 1;
                            // Apply a quick blur effect on fast scrolls
                            bg.style.filter = `blur(${velocityEffect * 0.2}px) saturate(${1.2 + velocityEffect * 0.05})`;
                            
                            // Extra velocity-based movement
                            transform += ` translateY(${velocityEffect * velocityDir}px)`;
                        } else {
                            bg.style.filter = 'blur(1px) saturate(1.2)';
                        }
                        break;
                    
                    case 'features':
                        // More dramatic rotation and movement
                        const featuresRotation = progress * 5;
                        const featuresYOffset = -progress * 120 * speed;
                        // Add horizontal movement for more drama
                        const featuresXOffset = Math.sin(progress * Math.PI * 3) * 50;
                        transform = `translate3d(${featuresXOffset}px, ${featuresYOffset}px, 0) rotate(${featuresRotation}deg)`;
                        scale = 1 + (progress * 0.2);
                        
                        // Add velocity-based distortion
                        if (Math.abs(scrollVelocity) > 5) {
                            const velocityEffect = Math.min(20, Math.abs(scrollVelocity) * 0.15);
                            bg.style.filter = `blur(${velocityEffect * 0.2}px) hue-rotate(${velocityEffect}deg)`;
                        } else {
                            bg.style.filter = 'blur(1px) hue-rotate(0deg)';
                        }
                        break;
                    
                    case 'learn':
                        // Enhanced horizontal parallax with depth effect
                        const learnXOffset = (progress - 0.5) * 150 * speed;
                        const learnYOffset = Math.sin(progress * Math.PI) * 80;
                        const learnRotation = Math.sin(progress * Math.PI * 2.5) * 5;
                        transform = `translate3d(${learnXOffset}px, ${learnYOffset}px, ${progress * -150}px) rotate(${learnRotation}deg)`;
                        scale = 1 + (Math.abs(progress - 0.5) * 0.25);
                        
                        // Add velocity-based contrast
                        if (Math.abs(scrollVelocity) > 5) {
                            const velocityEffect = Math.min(20, Math.abs(scrollVelocity) * 0.1);
                            bg.style.filter = `blur(${velocityEffect * 0.15}px) contrast(${1.1 + velocityEffect * 0.05})`;
                        } else {
                            bg.style.filter = 'blur(1px) contrast(1.1)';
                        }
                        break;
                    
                    case 'interactive':
                        // Create a dramatic spiral-like movement
                        const interactiveRotation = progress * 8;
                        const interactiveX = Math.sin(progress * Math.PI * 3) * 80;
                        const interactiveY = (progress - 0.5) * 150 * speed;
                        transform = `translate3d(${interactiveX}px, ${interactiveY}px, 0) rotate(${interactiveRotation}deg)`;
                        scale = 1 + (Math.sin(progress * Math.PI) * 0.25);
                        
                        // Add velocity-based brightness
                        if (Math.abs(scrollVelocity) > 5) {
                            const velocityEffect = Math.min(20, Math.abs(scrollVelocity) * 0.1);
                            bg.style.filter = `blur(${velocityEffect * 0.15}px) brightness(${1.1 + velocityEffect * 0.05})`;
                        } else {
                            bg.style.filter = 'blur(1px) brightness(1.1)';
                        }
                        break;
                    
                    case 'start':
                        // Dramatic zoom effect as user scrolls through
                        const startYOffset = (progress - 1) * 100 * speed;
                        const pulseEffect = Math.sin(progress * Math.PI * 6) * 30;
                        transform = `translate3d(0, ${startYOffset + pulseEffect}px, 0)`;
                        scale = 1 + (progress * 0.35);
                        
                        // Add velocity-based effects for start section
                        if (Math.abs(scrollVelocity) > 5) {
                            // Apply dynamic animation duration based on scroll velocity
                            const velocityEffect = Math.min(10, Math.abs(scrollVelocity) * 0.05);
                            const animationDuration = Math.max(5, 15 - velocityEffect);
                            bg.style.animationDuration = `${animationDuration}s`;
                        } else {
                            bg.style.animationDuration = '15s';
                        }
                        break;
                    
                    default:
                        transform = `translate3d(0, ${progress * 150 * speed}px, 0)`;
                }
                
                // Apply the transform and scale with dynamic easing based on velocity
                let transitionDuration = Math.abs(scrollVelocity) > 10 ? '0.05s' : '0.2s';
                let easingFunction = Math.abs(scrollVelocity) > 10 ? 'cubic-bezier(0.19, 1, 0.22, 1)' : 'cubic-bezier(0.33, 1, 0.68, 1)';
                
                bg.style.transform = `${transform} scale(${scale})`;
                bg.style.transition = `transform ${transitionDuration} ${easingFunction}`;
                
                // Cross-fade between sections for more dramatic transitions
                if (section.nextElementSibling) {
                    const nextSection = section.nextElementSibling;
                    const nextBg = nextSection.querySelector('.parallax-bg');
                    
                    if (nextBg && progress > 0.6) {
                        // Start revealing the next section's background earlier
                        const fadeInAmount = (progress - 0.6) * 2.5; // Scales 0.6-1.0 to 0-1
                        nextBg.style.opacity = Math.min(fadeInAmount, 1);
                        
                        // Add a more dramatic entry effect for the next section
                        const entryScale = 1.15 - (fadeInAmount * 0.15);
                        const entryRotate = (1 - fadeInAmount) * 5;
                        const entryY = (1 - fadeInAmount) * 50;
                        nextBg.style.transform = `scale(${entryScale}) rotate(${entryRotate}deg) translateY(${entryY}px)`;
                    }
                }
            }
        });
        
        ticking = false;
    }
    
    // Optimize scroll listener with requestAnimationFrame
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Apply initial effect
    updateParallax();
    
    // Add optimized scroll event listener - make it run continuously
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Custom mouse movement effect for enhanced parallax
    let mouseX = 0;
    let mouseY = 0;
    
    window.addEventListener('mousemove', function(e) {
        // Get mouse position relative to window
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
        
        // Apply subtle mouse-based parallax to all sections
        if (!ticking) {
            requestAnimationFrame(() => {
                sections.forEach(section => {
                    const bg = section.querySelector('.parallax-bg');
                    if (bg && section.getBoundingClientRect().top < window.innerHeight && 
                        section.getBoundingClientRect().bottom > 0) {
                        
                        // Get current transform
                        const currentTransform = bg.style.transform || '';
                        
                        // Only add mouse effect if not already present
                        if (!currentTransform.includes('perspective')) {
                            // Add subtle mouse-based rotation
                            const mouseTransform = ` perspective(1000px) rotateX(${mouseY * 5}deg) rotateY(${-mouseX * 5}deg)`;
                            
                            // Extract scale value if present
                            const scaleMatch = currentTransform.match(/scale\(([^)]+)\)/);
                            const scale = scaleMatch ? scaleMatch[0] : '';
                            
                            // Update transform with mouse effect
                            bg.style.transform = currentTransform.replace(scale, '') + mouseTransform + (scale ? ` ${scale}` : '');
                        }
                    }
                });
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    // Continuously update effects even when not scrolling for subtle animations
    function continuousUpdate() {
        // Only update if we're not actively scrolling to avoid conflicts
        const scrollPosition = window.pageYOffset;
        if (scrollPosition === lastScrollY && !ticking) {
            requestAnimationFrame(() => {
                // Apply subtle continuous animations to backgrounds
                document.querySelectorAll('.parallax-bg').forEach(bg => {
                    const currentTransform = bg.style.transform || '';
                    if (currentTransform) {
                        // Extract current values and add subtle continuous movements
                        const section = bg.parentElement;
                        if (!section) return;
                        
                        // Get current time for continuous animation
                        const time = Date.now() / 1000;
                        const sectionId = section.id;
                        
                        // Apply subtle continuous animations based on section
                        let continuousEffect = '';
                        
                        switch(sectionId) {
                            case 'hero':
                                // Subtle floating effect
                                continuousEffect = `translate3d(${Math.sin(time * 0.5) * 7}px, ${Math.cos(time * 0.5) * 7}px, 0)`;
                                break;
                            case 'features':
                                // Subtle rotation
                                continuousEffect = `rotate(${Math.sin(time * 0.3) * 1}deg)`;
                                break;
                            case 'learn':
                                // Subtle horizontal movement
                                continuousEffect = `translate3d(${Math.sin(time * 0.3) * 5}px, 0, 0)`;
                                break;
                            case 'interactive':
                                // Subtle pulse
                                const pulseScale = 1 + Math.sin(time * 0.8) * 0.015;
                                continuousEffect = `scale(${pulseScale})`;
                                break;
                            case 'start':
                                // Subtle glow effect via overlay
                                const overlay = section.querySelector('.color-transition-overlay');
                                if (overlay) {
                                    const baseOpacity = parseFloat(overlay.style.opacity) || 0;
                                    const pulseOpacity = baseOpacity + Math.sin(time * 1.5) * 0.08;
                                    overlay.style.opacity = Math.max(0, Math.min(1, pulseOpacity));
                                }
                                break;
                        }
                        
                        // Apply the continuous effect
                        if (continuousEffect) {
                            // Extract scale value if present
                            const scaleMatch = currentTransform.match(/scale\(([^)]+)\)/);
                            const scale = scaleMatch ? scaleMatch[0] : '';
                            
                            // Base transform without scale
                            const baseTransform = currentTransform.replace(scale, '');
                            
                            // Combine everything
                            bg.style.transform = `${baseTransform} ${continuousEffect} ${scale}`;
                        }
                    }
                });
            });
        }
        
        // Continue the animation loop
        setTimeout(continuousUpdate, 16); // ~60fps
    }
    
    // Start continuous updates
    continuousUpdate();
    
    // Update on resize
    window.addEventListener('resize', () => {
        updateParallax();
    }, { passive: true });
    
    // Add scroll event to scroll indicators - make them more dramatic
    document.querySelectorAll('.scroll-indicator').forEach(indicator => {
        // Add event listener for hover effect
        indicator.addEventListener('mouseenter', function() {
            this.style.animation = 'none'; // Temporarily stop the pulse animation
            this.style.transform = 'translateX(-50%) scale(1.15)';
            this.style.boxShadow = '0 0 20px rgba(13, 255, 132, 0.7)';
        });
        
        indicator.addEventListener('mouseleave', function() {
            this.style.animation = 'pulse 2s infinite'; // Restart the pulse animation
            this.style.transform = 'translateX(-50%) scale(1)';
            this.style.boxShadow = 'none';
        });
        
        indicator.addEventListener('click', function() {
            const section = this.closest('section');
            const nextSection = section.nextElementSibling;
            
            if (nextSection) {
                // Add a more dramatic flash effect when clicking
                const flash = document.createElement('div');
                flash.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at ${event.clientX}px ${event.clientY}px, 
                                               rgba(13, 255, 132, 0.6) 0%, 
                                               rgba(13, 255, 132, 0.3) 20%, 
                                               transparent 70%);
                    z-index: 9999;
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity 0.8s ease-out;
                `;
                document.body.appendChild(flash);
                
                // Show and fade out the flash
                setTimeout(() => { flash.style.opacity = '1'; }, 10);
                setTimeout(() => { flash.style.opacity = '0'; }, 200);
                setTimeout(() => { document.body.removeChild(flash); }, 1000);
                
                // Add a more dramatic scroll effect
                window.scrollTo({
                    top: nextSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add a parallax glitch effect on initial load
    setTimeout(() => {
        document.querySelectorAll('.parallax-bg').forEach(bg => {
            // Apply a quick glitch animation
            bg.animate([
                { transform: 'translate3d(10px, -5px, 0) scale(1.1)', filter: 'hue-rotate(15deg) brightness(1.2)' },
                { transform: 'translate3d(-15px, 8px, 0) scale(1.05)', filter: 'hue-rotate(-10deg) brightness(0.9)' },
                { transform: 'translate3d(0, 0, 0) scale(1)', filter: 'hue-rotate(0) brightness(1)' }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
            });
        });
    }, 1000);
}

// Initialize and customize chatbot
function initChatbot() {
    // Check for chatbot initialization
    let chatbotCheckInterval = setInterval(function() {
        // Check if chatbot bubble exists
        const chatbotBubble = document.querySelector('.chatbase-bubble');
        
        if (chatbotBubble) {
            clearInterval(chatbotCheckInterval);
            
            // Add our animation class
            chatbotBubble.classList.add('chatbase-animation');
            
            // Add scroll interaction for the chatbot
            window.addEventListener('scroll', function() {
                // Hide chatbot when user is deep in the page (after hero section)
                if (window.scrollY > window.innerHeight * 1.5) {
                    chatbotBubble.style.opacity = '0.7';
                    chatbotBubble.style.transform = 'scale(0.9)';
                } else {
                    chatbotBubble.style.opacity = '1';
                    chatbotBubble.style.transform = 'scale(1)';
                }
            });
            
            // Add mouse movement detection for subtle hover effect
            document.addEventListener('mousemove', function(e) {
                if (e.clientY > window.innerHeight - 150 && e.clientX > window.innerWidth - 150) {
                    // User is moving near the chatbot area
                    chatbotBubble.style.transform = 'scale(1.03)';
                } else {
                    chatbotBubble.style.transform = 'scale(1)';
                }
            });
            
            // Handle chatbot open/close to adjust parallax effects
            chatbotBubble.addEventListener('click', function() {
                // Check if chat window is open after a small delay
                setTimeout(function() {
                    const chatWindow = document.querySelector('.chatbase-chat-window');
                    if (chatWindow) {
                        // Reduce parallax intensity when chat is open
                        document.querySelectorAll('.parallax-bg').forEach(bg => {
                            bg.style.transition = 'transform 0.3s ease';
                            bg.style.transform = 'scale(0.98)';
                            bg.style.filter = 'blur(3px)';
                        });
                        
                        // Add suggested questions to the chat window
                        addSuggestedQuestions(chatWindow);
                    } else {
                        // Restore parallax intensity when chat is closed
                        document.querySelectorAll('.parallax-bg').forEach(bg => {
                            bg.style.transition = 'transform 0.3s ease';
                            bg.style.transform = '';
                            bg.style.filter = '';
                        });
                    }
                }, 300);
            });
            
            // Create welcome message tooltip
            const welcomeTip = document.createElement('div');
            welcomeTip.className = 'welcome-tip';
            welcomeTip.innerHTML = '<p>Need help with investing? Ask me anything!</p>';
            welcomeTip.style.cssText = `
                position: absolute;
                bottom: 80px;
                right: 20px;
                background: var(--glass-bg);
                border: 1px solid var(--glass-border);
                border-radius: var(--border-radius);
                padding: 12px 20px;
                width: 220px;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                box-shadow: var(--glass-shadow);
                color: var(--text-color);
                font-size: 14px;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.5s ease;
                pointer-events: none;
                z-index: 9998;
            `;
            document.body.appendChild(welcomeTip);
            
            // Show the welcome tip after a delay
            setTimeout(function() {
                welcomeTip.style.opacity = '1';
                welcomeTip.style.transform = 'translateY(0)';
                
                // Hide the welcome tip after 7 seconds
                setTimeout(function() {
                    welcomeTip.style.opacity = '0';
                    welcomeTip.style.transform = 'translateY(20px)';
                    
                    // Remove the welcome tip from DOM after animation
                    setTimeout(function() {
                        document.body.removeChild(welcomeTip);
                    }, 500);
                }, 7000);
            }, 5000);
            
            // Setup context-aware suggestions based on page section
            setupContextSuggestions();
        }
    }, 1000);
}

// Add suggested questions to the chat window
function addSuggestedQuestions(chatWindow) {
    // Check if suggestions already exist
    if (chatWindow.querySelector('.suggested-questions')) return;
    
    // Wait for the chat interface to fully load
    setTimeout(() => {
        // Find the footer of the chat window
        const chatFooter = chatWindow.querySelector('.footer');
        
        if (chatFooter) {
            // Create the suggested questions container
            const suggestedContainer = document.createElement('div');
            suggestedContainer.className = 'suggested-questions';
            suggestedContainer.style.cssText = `
                padding: 10px 15px;
                background: rgba(25, 25, 30, 0.6);
                border-top: 1px solid var(--primary-color);
                overflow-x: auto;
                white-space: nowrap;
                display: flex;
                gap: 10px;
                scrollbar-width: thin;
                scrollbar-color: var(--primary-color) transparent;
            `;
            
            // Common investing questions
            const commonQuestions = [
                "What is P/E ratio?",
                "How to read candlestick charts?",
                "What are dividends?",
                "How to analyze stocks?",
                "What is a good beginner portfolio?",
                "How do I start investing as a student?"
            ];
            
            // Create buttons for each question
            commonQuestions.forEach(question => {
                const questionBtn = document.createElement('button');
                questionBtn.textContent = question;
                questionBtn.style.cssText = `
                    background: var(--glass-bg);
                    border: 1px solid var(--primary-color);
                    border-radius: 20px;
                    padding: 8px 15px;
                    font-size: 12px;
                    color: var(--text-color);
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.2s ease;
                    flex-shrink: 0;
                `;
                
                // Hover effect
                questionBtn.addEventListener('mouseenter', () => {
                    questionBtn.style.background = `rgba(13, 255, 132, 0.15)`;
                    questionBtn.style.transform = 'translateY(-2px)';
                });
                
                questionBtn.addEventListener('mouseleave', () => {
                    questionBtn.style.background = 'var(--glass-bg)';
                    questionBtn.style.transform = 'translateY(0)';
                });
                
                // Click handler to fill the input field
                questionBtn.addEventListener('click', () => {
                    const inputField = chatWindow.querySelector('textarea, input[type="text"]');
                    if (inputField) {
                        inputField.value = question;
                        inputField.focus();
                        
                        // Trigger input event to ensure chatbot knows the field has content
                        const inputEvent = new Event('input', { bubbles: true });
                        inputField.dispatchEvent(inputEvent);
                    }
                });
                
                suggestedContainer.appendChild(questionBtn);
            });
            
            // Insert the suggested questions before the footer
            chatFooter.parentNode.insertBefore(suggestedContainer, chatFooter);
        }
    }, 1000);
}

// Setup context-aware suggestions based on which section the user is viewing
function setupContextSuggestions() {
    // Track the current section
    let currentSection = 'hero';
    
    // Define suggested questions by section
    const sectionSuggestions = {
        hero: [
            "What investment strategies are best for beginners?",
            "How much money do I need to start investing?",
            "What's the difference between investing and saving?"
        ],
        features: [
            "How do I analyze risk vs. return?",
            "What's dollar-cost averaging?",
            "How do I diversify my portfolio?"
        ],
        learn: [
            "Can you explain what ETFs are?",
            "How do stock market indices work?",
            "What's the difference between stocks and bonds?"
        ],
        interactive: [
            "How do I use the interactive tools?",
            "Can you help me analyze this investment scenario?",
            "What metrics should I focus on when comparing investments?"
        ],
        start: [
            "How do I create my first investment plan?",
            "What are the best investing apps for students?",
            "How do taxes affect my investments?"
        ]
    };
    
    // Function to update suggestions based on current section
    function updateChatbotSuggestions() {
        // Wait for Chatbase to be initialized
        const waitForChatbase = setInterval(() => {
            if (window.Chatbase) {
                clearInterval(waitForChatbase);
                
                // Set the suggestions
                if (window.Chatbase.updateSuggestedQuestions && sectionSuggestions[currentSection]) {
                    window.Chatbase.updateSuggestedQuestions(sectionSuggestions[currentSection]);
                }
            }
        }, 300);
    }
    
    // Detect which section is currently in view
    window.addEventListener('scroll', function() {
        const sections = ['hero', 'features', 'learn', 'interactive', 'start'];
        
        // Determine which section is most in view
        let maxVisibleSection = '';
        let maxVisibleAmount = 0;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                const visibleAmount = visibleHeight > 0 ? visibleHeight / section.offsetHeight : 0;
                
                if (visibleAmount > maxVisibleAmount) {
                    maxVisibleAmount = visibleAmount;
                    maxVisibleSection = sectionId;
                }
            }
        });
        
        // If section changed and we have a valid section
        if (maxVisibleSection && maxVisibleSection !== currentSection) {
            currentSection = maxVisibleSection;
            updateChatbotSuggestions();
        }
    });
    
    // Set initial suggestions
    updateChatbotSuggestions();
}

// Chatbot enhancements
function enhanceChatbotExperience() {
    // Wait for Chatbase to be initialized
    const waitForChatbase = setInterval(() => {
        if (window.Chatbase) {
            clearInterval(waitForChatbase);
            setupChatbotEnhancements();
        }
    }, 300);

    function setupChatbotEnhancements() {
        // Create welcome tooltip for chatbot
        const chatbotBubble = document.querySelector('.chatbase-bubble');
        if (chatbotBubble) {
            createWelcomeTooltip(chatbotBubble);
            
            // Add animation class for the bubble
            setTimeout(() => {
                chatbotBubble.classList.add('animated');
            }, 1000);
            
            // Monitor for chat window opening
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.addedNodes.length > 0) {
                        mutation.addedNodes.forEach((node) => {
                            if (node.classList && node.classList.contains('chatbase-chat-window')) {
                                enhanceChatWindow(node);
                            }
                        });
                    }
                });
            });
            
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }

    function createWelcomeTooltip(bubbleElement) {
        const tooltip = document.createElement('div');
        tooltip.className = 'welcome-tooltip';
        tooltip.innerHTML = 'Have questions about investing? Ask me anything!';
        document.body.appendChild(tooltip);
        
        // Show tooltip after a delay
        setTimeout(() => {
            tooltip.classList.add('visible');
            
            // Hide tooltip after some time
            setTimeout(() => {
                tooltip.classList.remove('visible');
                
                // Remove from DOM after animation completes
                setTimeout(() => {
                    if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, 500);
            }, 5000);
        }, 2000);
    }

    function enhanceChatWindow(chatWindow) {
        // Add opening animation class
        chatWindow.classList.add('opening');
        
        // Remove the class after animation completes
        setTimeout(() => {
            chatWindow.classList.remove('opening');
        }, 500);
        
        // Monitor for new messages
        const messagesContainer = chatWindow.querySelector('.messages-container');
        if (messagesContainer) {
            const messageObserver = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.addedNodes.length > 0) {
                        // Find newly added message bubbles
                        mutation.addedNodes.forEach((node) => {
                            if (node.classList && 
                                (node.classList.contains('chatbot-message') || 
                                 node.classList.contains('user-message'))) {
                                // Add animation
                                animateNewMessage(node);
                                
                                // Scroll to bottom
                                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                            }
                        });
                    }
                });
            });
            
            messageObserver.observe(messagesContainer, { childList: true, subtree: true });
        }
        
        // Apply our custom styling to any suggested questions
        applySuggestedQuestionsStyle(chatWindow);
    }

    function animateNewMessage(messageNode) {
        // Apply animation
        messageNode.style.animation = 'pulse 0.3s ease-out forwards';
        
        // Remove animation after it completes
        setTimeout(() => {
            messageNode.style.animation = '';
        }, 400);
    }

    function applySuggestedQuestionsStyle(chatWindow) {
        // First check if there's already a container
        let container = chatWindow.querySelector('.suggested-questions');
        
        if (!container) {
            // If no container exists, create one and insert it before the input
            container = document.createElement('div');
            container.className = 'suggested-questions';
            
            const inputContainer = chatWindow.querySelector('.input-container');
            if (inputContainer && inputContainer.parentNode) {
                inputContainer.parentNode.insertBefore(container, inputContainer);
            }
        }
        
        // Apply our styling to existing suggestion buttons
        const buttons = chatWindow.querySelectorAll('.suggested-question-btn');
        buttons.forEach(btn => {
            styleQuestionButton(btn, container);
        });
        
        // Set up observer to style new suggestion buttons
        const questionsObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.classList && node.classList.contains('suggested-question-btn')) {
                            styleQuestionButton(node, container);
                        }
                    });
                }
            });
        });
        
        questionsObserver.observe(chatWindow, { childList: true, subtree: true });
    }

    function styleQuestionButton(button, container) {
        // Move the button to our container if it's not already there
        if (button.parentNode !== container) {
            container.appendChild(button);
        }
        
        // Apply our custom styling
        button.style.background = 'var(--glass-bg)';
        button.style.border = '1px solid rgba(13, 255, 132, 0.3)';
        button.style.borderRadius = '20px';
        button.style.padding = '8px 15px';
        button.style.margin = '0 5px 5px 0';
        button.style.color = 'var(--text-color)';
        button.style.fontSize = '12px';
        button.style.whiteSpace = 'nowrap';
        button.style.cursor = 'pointer';
        button.style.transition = 'all 0.2s ease';
        
        // Add hover effect
        button.onmouseenter = function() {
            this.style.background = 'rgba(13, 255, 132, 0.15)';
            this.style.borderColor = 'var(--primary-color)';
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        };
        
        button.onmouseleave = function() {
            this.style.background = 'var(--glass-bg)';
            this.style.borderColor = 'rgba(13, 255, 132, 0.3)';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        };
    }
}

// Add section highlighting to enhance navigation experience
function setupSectionHighlighting() {
    // Create section indicator
    const sectionIndicator = document.createElement('div');
    sectionIndicator.className = 'section-indicator';
    sectionIndicator.innerHTML = `
        <div class="section-name">Hero</div>
        <div class="progress-container">
            <div class="progress-bar"></div>
        </div>
    `;
    document.body.appendChild(sectionIndicator);

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .section-indicator {
            position: fixed;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px 15px;
            border-radius: 20px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            align-items: center;
            backdrop-filter: blur(5px);
            transition: opacity 0.3s ease;
            opacity: 0;
        }
        .section-indicator.visible {
            opacity: 1;
        }
        .section-name {
            font-size: 14px;
            margin-bottom: 5px;
            font-weight: 500;
        }
        .progress-container {
            width: 100px;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            overflow: hidden;
        }
        .progress-bar {
            height: 100%;
            width: 0%;
            background: var(--accent-color, #5d5fef);
            transition: width 0.2s ease;
        }
    `;
    document.head.appendChild(style);

    // Define sections to track
    const sections = [
        { id: 'hero', name: 'Hero' },
        { id: 'features', name: 'Features' },
        { id: 'learn', name: 'Learn' },
        { id: 'interactive', name: 'Interactive' },
        { id: 'start', name: 'Start' }
    ];

    // Track scrolling
    let isScrolling = false;
    let lastScrollTime = Date.now();
    const progressBar = sectionIndicator.querySelector('.progress-bar');
    const sectionNameElement = sectionIndicator.querySelector('.section-name');

    window.addEventListener('scroll', () => {
        isScrolling = true;
        lastScrollTime = Date.now();

        // Make indicator visible during scroll
        sectionIndicator.classList.add('visible');

        // Determine which section is in view
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        let currentSection = sections[0];
        let progress = 0;

        for (const section of sections) {
            const element = document.getElementById(section.id);
            if (!element) continue;

            const rect = element.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + rect.height;

            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                currentSection = section;
                // Calculate progress through this section (0-100%)
                progress = ((scrollPosition - sectionTop) / rect.height) * 100;
                break;
            }
        }

        // Update section name
        sectionNameElement.textContent = currentSection.name;

        // Update progress bar
        progressBar.style.width = `${progress}%`;
    });

    // Hide indicator when not scrolling
    setInterval(() => {
        if (isScrolling && Date.now() - lastScrollTime > 1500) {
            isScrolling = false;
            sectionIndicator.classList.remove('visible');
        }
    }, 100);
}

// Initialize Paper Trading Simulator
function initPaperTrading() {
    // Define stocks data (in a real app, this would come from an API)
    const stocksData = {
        'AAPL': { name: 'Apple Inc.', price: 182.63, change: 1.37, changePercent: 0.75, sector: 'Technology', previousClose: 180.25 },
        'MSFT': { name: 'Microsoft Corp', price: 411.22, change: 2.54, changePercent: 0.62, sector: 'Technology', previousClose: 408.68 },
        'AMZN': { name: 'Amazon.com Inc', price: 178.75, change: -1.25, changePercent: -0.69, sector: 'Consumer Discretionary', previousClose: 180.00 },
        'GOOGL': { name: 'Alphabet Inc', price: 149.32, change: 0.84, changePercent: 0.57, sector: 'Communication Services', previousClose: 148.48 },
        'META': { name: 'Meta Platforms Inc', price: 475.88, change: -3.24, changePercent: -0.68, sector: 'Communication Services', previousClose: 479.12 },
        'TSLA': { name: 'Tesla Inc', price: 175.21, change: 3.83, changePercent: 2.23, sector: 'Consumer Discretionary', previousClose: 171.38 },
        'NVDA': { name: 'NVIDIA Corp', price: 880.08, change: 15.46, changePercent: 1.79, sector: 'Technology', previousClose: 864.62 },
        'JPM': { name: 'JPMorgan Chase & Co', price: 198.48, change: -1.12, changePercent: -0.56, sector: 'Financials', previousClose: 199.60 },
        'JNJ': { name: 'Johnson & Johnson', price: 152.74, change: 0.28, changePercent: 0.18, sector: 'Healthcare', previousClose: 152.46 },
        'WMT': { name: 'Walmart Inc', price: 68.79, change: 0.67, changePercent: 0.98, sector: 'Consumer Staples', previousClose: 68.12 }
    };

    // User portfolio data (stored in localStorage)
    let portfolio = JSON.parse(localStorage.getItem('investifyxPortfolio')) || {
        cash: 10000,
        initialInvestment: 10000,
        holdings: {},
        transactions: []
    };

    // Elements
    const stockSearch = document.getElementById('stock-search');
    const searchButton = document.getElementById('search-button');
    const stockInfo = document.getElementById('stock-info');
    const tradeForm = document.getElementById('trade-form');
    const stockTags = document.querySelectorAll('.stock-tag');
    const shareQuantity = document.getElementById('share-quantity');
    const marketPrice = document.getElementById('market-price');
    const estimatedCost = document.getElementById('estimated-cost');
    const placeOrder = document.getElementById('place-order');
    const tradeBtns = document.querySelectorAll('.trade-btn');
    const totalPortfolioValue = document.getElementById('total-portfolio-value');
    const availableCash = document.getElementById('available-cash');
    const portfolioChange = document.getElementById('portfolio-change');
    const resetPortfolio = document.getElementById('reset-portfolio');
    const helpButton = document.getElementById('help-button');
    const tradingHelpModal = document.getElementById('trading-help-modal');
    const closeHelp = document.getElementById('close-help');
    const startTutorial = document.getElementById('start-tutorial');
    const simulatorTabs = document.querySelectorAll('.simulator-tab');
    const simulatorPanels = document.querySelectorAll('.simulator-panel');
    const holdingsBody = document.getElementById('holdings-body');
    const historyBody = document.getElementById('history-body');
    const historyFilters = document.querySelectorAll('.history-filter');
    const portfolioChartCanvas = document.getElementById('portfolio-chart');

    // Skip if elements don't exist
    if (!stockSearch || !searchButton) return;

    // Initialize charts and tables
    updatePortfolioDisplay();
    updateHoldingsTable();
    updateHistoryTable();
    initPortfolioChart();

    // Event listeners
    searchButton.addEventListener('click', searchStock);
    stockSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchStock();
        }
    });

    shareQuantity.addEventListener('input', updateEstimatedCost);

    stockTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const symbol = this.getAttribute('data-symbol');
            stockSearch.value = symbol;
            searchStock();
        });
    });

    tradeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tradeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateEstimatedCost();
        });
    });

    placeOrder.addEventListener('click', executeTrade);

    resetPortfolio.addEventListener('click', function() {
        if (confirm('Are you sure you want to reset your portfolio? This will clear all your holdings and transactions.')) {
            resetUserPortfolio();
        }
    });

    helpButton.addEventListener('click', function() {
        tradingHelpModal.classList.add('active');
    });

    closeHelp.addEventListener('click', function() {
        tradingHelpModal.classList.remove('active');
    });

    startTutorial.addEventListener('click', startTradingTutorial);

    simulatorTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and panels
            simulatorTabs.forEach(t => t.classList.remove('active'));
            simulatorPanels.forEach(p => p.classList.remove('active'));
            
            // Add active class to current tab and panel
            this.classList.add('active');
            document.getElementById(tabId + '-panel').classList.add('active');
        });
    });

    historyFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            historyFilters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            updateHistoryTable(this.getAttribute('data-filter'));
        });
    });

    // Functions for Paper Trading
    function searchStock() {
        const symbol = stockSearch.value.trim().toUpperCase();
        if (!symbol) return;

        if (stocksData[symbol]) {
            displayStockInfo(symbol, stocksData[symbol]);
        } else {
            // In a real app, you would make an API call here
            stockInfo.innerHTML = `
                <div class="placeholder-message">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Stock not found. Please try another symbol.</p>
                </div>
            `;
            tradeForm.style.display = 'none';
        }
    }

    function displayStockInfo(symbol, stock) {
        const changeClass = stock.change >= 0 ? 'change-up' : 'change-down';
        const changeIcon = stock.change >= 0 ? 'fa-arrow-up' : 'fa-arrow-down';
        
        stockInfo.innerHTML = `
            <div class="stock-display">
                <div class="stock-details">
                    <div class="stock-logo">${symbol.charAt(0)}</div>
                    <div class="stock-name">
                        <h3>${symbol}</h3>
                        <p>${stock.name} • ${stock.sector}</p>
                    </div>
                </div>
                <div class="stock-price">
                    <h3>$${stock.price.toFixed(2)}</h3>
                    <span class="${changeClass}">
                        <i class="fas ${changeIcon}"></i>
                        ${stock.change >= 0 ? '+' : ''}$${Math.abs(stock.change).toFixed(2)} (${stock.changePercent.toFixed(2)}%)
                    </span>
                </div>
            </div>
            <div class="stock-chart">
                <canvas id="stock-price-chart"></canvas>
            </div>
        `;

        // Create a simple chart for the stock
        createStockChart(symbol);
        
        // Show trade form
        tradeForm.style.display = 'block';
        
        // Update price in trade form
        marketPrice.textContent = `$${stock.price.toFixed(2)}`;
        
        // Reset quantity
        shareQuantity.value = 1;
        
        // Update estimated cost
        updateEstimatedCost();
    }

    function createStockChart(symbol) {
        const ctx = document.getElementById('stock-price-chart');
        if (!ctx) return;
        
        // Generate some random data for the chart
        // In a real app, you would use actual historical data
        const data = generateMockStockData(symbol);
        
        // Create the chart
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets: [{
                    label: symbol + ' Price',
                    data: data.prices,
                    backgroundColor: 'rgba(13, 255, 132, 0.1)',
                    borderColor: 'rgba(13, 255, 132, 1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                return `$${context.parsed.y.toFixed(2)}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.5)',
                            maxRotation: 0,
                            autoSkip: true,
                            maxTicksLimit: 6
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        },
                        ticks: {
                            color: 'rgba(255, 255, 255, 0.5)'
                        }
                    }
                }
            }
        });
    }

    function generateMockStockData(symbol) {
        const stockData = stocksData[symbol];
        const currentPrice = stockData.price;
        const previousClose = stockData.previousClose;
        
        // Generate 30 days of mock data
        const labels = [];
        const prices = [];
        
        for (let i = 30; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            labels.push(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
            
            // Start close to previous close and trend toward current price
            const progress = (30 - i) / 30;
            let basePrice = previousClose + (currentPrice - previousClose) * progress;
            
            // Add some randomness
            const volatility = 0.02; // 2% volatility
            const randomFactor = 1 + (Math.random() - 0.5) * volatility;
            prices.push(basePrice * randomFactor);
        }
        
        return { labels, prices };
    }

    function updateEstimatedCost() {
        const symbol = stockSearch.value.trim().toUpperCase();
        const stock = stocksData[symbol];
        if (!stock) return;
        
        const quantity = parseInt(shareQuantity.value) || 0;
        const action = document.querySelector('.trade-btn.active').getAttribute('data-action');
        const cost = quantity * stock.price;
        
        estimatedCost.textContent = `$${cost.toFixed(2)}`;
        
        // Update button state based on action and available cash/holdings
        if (action === 'buy') {
            placeOrder.disabled = cost > portfolio.cash || quantity <= 0;
            placeOrder.textContent = 'Buy Shares';
        } else {
            const sharesOwned = portfolio.holdings[symbol] ? portfolio.holdings[symbol].shares : 0;
            placeOrder.disabled = quantity > sharesOwned || quantity <= 0;
            placeOrder.textContent = 'Sell Shares';
        }
    }

    function executeTrade() {
        const symbol = stockSearch.value.trim().toUpperCase();
        const stock = stocksData[symbol];
        if (!stock) return;
        
        const quantity = parseInt(shareQuantity.value) || 0;
        const action = document.querySelector('.trade-btn.active').getAttribute('data-action');
        const price = stock.price;
        const total = quantity * price;
        
        if (action === 'buy') {
            if (total > portfolio.cash) {
                alert('Insufficient funds to complete this purchase.');
                return;
            }
            
            // Update cash
            portfolio.cash -= total;
            
            // Update holdings
            if (!portfolio.holdings[symbol]) {
                portfolio.holdings[symbol] = {
                    name: stock.name,
                    shares: 0,
                    totalCost: 0
                };
            }
            
            portfolio.holdings[symbol].shares += quantity;
            portfolio.holdings[symbol].totalCost += total;
            
            // Add transaction
            portfolio.transactions.push({
                date: new Date().toISOString(),
                action: 'buy',
                symbol: symbol,
                shares: quantity,
                price: price,
                total: total
            });
            
            // Show confirmation
            alert(`Successfully purchased ${quantity} shares of ${symbol} for $${total.toFixed(2)}`);
        } else {
            // Selling shares
            if (!portfolio.holdings[symbol] || portfolio.holdings[symbol].shares < quantity) {
                alert('You do not have enough shares to complete this sale.');
                return;
            }
            
            // Update cash
            portfolio.cash += total;
            
            // Update holdings
            portfolio.holdings[symbol].shares -= quantity;
            
            // If no shares left, remove from holdings
            if (portfolio.holdings[symbol].shares === 0) {
                delete portfolio.holdings[symbol];
            } else {
                // Adjust total cost proportionally
                const shareFraction = quantity / (portfolio.holdings[symbol].shares + quantity);
                const costReduction = portfolio.holdings[symbol].totalCost * shareFraction;
                portfolio.holdings[symbol].totalCost -= costReduction;
            }
            
            // Add transaction
            portfolio.transactions.push({
                date: new Date().toISOString(),
                action: 'sell',
                symbol: symbol,
                shares: quantity,
                price: price,
                total: total
            });
            
            // Show confirmation
            alert(`Successfully sold ${quantity} shares of ${symbol} for $${total.toFixed(2)}`);
        }
        
        // Save updated portfolio
        savePortfolio();
        
        // Reset form
        shareQuantity.value = 1;
        updateEstimatedCost();
        
        // Update displays
        updatePortfolioDisplay();
        updateHoldingsTable();
        updateHistoryTable();
        initPortfolioChart();
    }

    function updatePortfolioDisplay() {
        // Calculate total portfolio value
        let totalValue = portfolio.cash;
        
        for (const symbol in portfolio.holdings) {
            const holding = portfolio.holdings[symbol];
            const currentPrice = stocksData[symbol] ? stocksData[symbol].price : 0;
            totalValue += holding.shares * currentPrice;
        }
        
        // Update display
        totalPortfolioValue.textContent = `$${totalValue.toFixed(2)}`;
        availableCash.textContent = `$${portfolio.cash.toFixed(2)}`;
        
        // Calculate and display change
        const change = totalValue - portfolio.initialInvestment;
        const changePercent = (change / portfolio.initialInvestment) * 100;
        
        if (change === 0) {
            portfolioChange.className = 'change-neutral';
            portfolioChange.textContent = '0.00%';
        } else {
            portfolioChange.className = change >= 0 ? 'change-up' : 'change-down';
            portfolioChange.textContent = `${change >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
        }
    }

    function updateHoldingsTable() {
        if (!holdingsBody) return;
        
        if (Object.keys(portfolio.holdings).length === 0) {
            holdingsBody.innerHTML = `
                <tr class="empty-state">
                    <td colspan="7">You don't have any holdings yet. Start trading to build your portfolio!</td>
                </tr>
            `;
            return;
        }
        
        let html = '';
        
        for (const symbol in portfolio.holdings) {
            const holding = portfolio.holdings[symbol];
            const currentPrice = stocksData[symbol] ? stocksData[symbol].price : 0;
            const currentValue = holding.shares * currentPrice;
            const avgPrice = holding.totalCost / holding.shares;
            const gain = currentValue - holding.totalCost;
            const gainPercent = (gain / holding.totalCost) * 100;
            const gainClass = gain >= 0 ? 'change-up' : 'change-down';
            
            html += `
                <tr>
                    <td>${symbol}</td>
                    <td>${holding.name}</td>
                    <td>${holding.shares}</td>
                    <td>$${avgPrice.toFixed(2)}</td>
                    <td>$${currentValue.toFixed(2)}</td>
                    <td class="${gainClass}">${gain >= 0 ? '+' : ''}$${gain.toFixed(2)} (${gainPercent.toFixed(2)}%)</td>
                    <td>
                        <button class="action-btn" onclick="document.getElementById('stock-search').value='${symbol}'; document.querySelector('[data-tab=\\'trade\\']').click(); searchStock();">Trade</button>
                    </td>
                </tr>
            `;
        }
        
        holdingsBody.innerHTML = html;
    }

    function updateHistoryTable(filter = 'all') {
        if (!historyBody) return;
        
        if (portfolio.transactions.length === 0) {
            historyBody.innerHTML = `
                <tr class="empty-state">
                    <td colspan="6">No transaction history yet. Start trading to see your history!</td>
                </tr>
            `;
            return;
        }
        
        // Sort transactions by date (newest first)
        const sortedTransactions = [...portfolio.transactions].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );
        
        // Filter transactions
        const filteredTransactions = filter === 'all' 
            ? sortedTransactions
            : sortedTransactions.filter(t => t.action === filter);
        
        if (filteredTransactions.length === 0) {
            historyBody.innerHTML = `
                <tr class="empty-state">
                    <td colspan="6">No ${filter} transactions found.</td>
                </tr>
            `;
            return;
        }
        
        let html = '';
        
        for (const transaction of filteredTransactions) {
            const date = new Date(transaction.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            const actionClass = transaction.action === 'buy' ? 'change-up' : 'change-down';
            const actionText = transaction.action === 'buy' ? 'Buy' : 'Sell';
            
            html += `
                <tr>
                    <td>${date}</td>
                    <td class="${actionClass}">${actionText}</td>
                    <td>${transaction.symbol}</td>
                    <td>${transaction.shares}</td>
                    <td>$${transaction.price.toFixed(2)}</td>
                    <td>$${transaction.total.toFixed(2)}</td>
                </tr>
            `;
        }
        
        historyBody.innerHTML = html;
    }

    function initPortfolioChart() {
        if (!portfolioChartCanvas) return;
        
        // Get existing chart instance and destroy it
        const existingChart = Chart.getChart(portfolioChartCanvas);
        if (existingChart) {
            existingChart.destroy();
        }
        
        if (portfolio.transactions.length === 0) {
            // No transactions, display empty chart
            new Chart(portfolioChartCanvas, {
                type: 'line',
                data: {
                    labels: ['Start'],
                    datasets: [{
                        label: 'Portfolio Value',
                        data: [portfolio.initialInvestment],
                        backgroundColor: 'rgba(13, 255, 132, 0.1)',
                        borderColor: 'rgba(13, 255, 132, 1)',
                        borderWidth: 2,
                        tension: 0.3,
                        fill: true
                    }]
                },
                options: getPortfolioChartOptions()
            });
            return;
        }
        
        // Generate portfolio value over time
        const portfolioHistory = generatePortfolioHistory();
        
        new Chart(portfolioChartCanvas, {
            type: 'line',
            data: {
                labels: portfolioHistory.dates,
                datasets: [{
                    label: 'Portfolio Value',
                    data: portfolioHistory.values,
                    backgroundColor: 'rgba(13, 255, 132, 0.1)',
                    borderColor: 'rgba(13, 255, 132, 1)',
                    borderWidth: 2,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: getPortfolioChartOptions()
        });
    }

    function getPortfolioChartOptions() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    callbacks: {
                        label: function(context) {
                            return `$${context.parsed.y.toFixed(2)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)',
                        maxRotation: 0,
                        autoSkip: true,
                        maxTicksLimit: 6
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.5)',
                        callback: function(value) {
                            return '$' + value.toFixed(0);
                        }
                    }
                }
            }
        };
    }

    function generatePortfolioHistory() {
        // Sort transactions by date
        const sortedTransactions = [...portfolio.transactions].sort((a, b) => 
            new Date(a.date) - new Date(b.date)
        );
        
        // Create a set of unique dates from transactions
        const startDate = new Date(sortedTransactions[0].date);
        const today = new Date();
        
        const dates = [];
        const values = [];
        
        // Create a day-by-day history
        let currentDate = new Date(startDate);
        let currentCash = portfolio.initialInvestment;
        let currentHoldings = {};
        
        while (currentDate <= today) {
            // Find transactions that happened on this day
            const dayTransactions = sortedTransactions.filter(t => {
                const transDate = new Date(t.date);
                return transDate.getDate() === currentDate.getDate() &&
                       transDate.getMonth() === currentDate.getMonth() &&
                       transDate.getFullYear() === currentDate.getFullYear();
            });
            
            // Apply transactions
            for (const transaction of dayTransactions) {
                if (transaction.action === 'buy') {
                    currentCash -= transaction.total;
                    
                    if (!currentHoldings[transaction.symbol]) {
                        currentHoldings[transaction.symbol] = {
                            shares: 0,
                            avgPrice: 0
                        };
                    }
                    
                    currentHoldings[transaction.symbol].shares += transaction.shares;
                    currentHoldings[transaction.symbol].avgPrice = transaction.price;
                } else {
                    currentCash += transaction.total;
                    currentHoldings[transaction.symbol].shares -= transaction.shares;
                    
                    if (currentHoldings[transaction.symbol].shares === 0) {
                        delete currentHoldings[transaction.symbol];
                    }
                }
            }
            
            // Calculate portfolio value on this day
            let totalValue = currentCash;
            
            for (const symbol in currentHoldings) {
                // Use current price as an approximation
                // In a real app, you would use historical price data
                const price = stocksData[symbol] ? stocksData[symbol].price : 0;
                totalValue += currentHoldings[symbol].shares * price;
            }
            
            // Add to history
            dates.push(currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
            values.push(totalValue);
            
            // Move to next day
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        return { dates, values };
    }

    function resetUserPortfolio() {
        // Reset portfolio to initial state
        portfolio = {
            cash: 10000,
            initialInvestment: 10000,
            holdings: {},
            transactions: []
        };
        
        // Save to localStorage
        savePortfolio();
        
        // Update UI
        updatePortfolioDisplay();
        updateHoldingsTable();
        updateHistoryTable();
        initPortfolioChart();
        
        // Show confirmation
        alert('Your portfolio has been reset. You now have $10,000 to invest.');
    }

    function savePortfolio() {
        localStorage.setItem('investifyxPortfolio', JSON.stringify(portfolio));
    }

    function startTradingTutorial() {
        // Close help modal
        tradingHelpModal.classList.remove('active');
        
        // Reset to trade tab
        document.querySelector('[data-tab="trade"]').click();
        
        // Set Apple as example
        stockSearch.value = 'AAPL';
        searchStock();
        
        // Show tutorial alert
        setTimeout(() => {
            alert('Welcome to the Paper Trading Tutorial! We\'ve selected Apple Inc. (AAPL) for you to practice with. Try buying some shares to start building your portfolio.');
        }, 500);
    }

    // Initialize paper trading simulator
    // Expose necessary functions for global access
    window.searchStock = searchStock;
} 
