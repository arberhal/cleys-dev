<script>
     function toggleAnimation(element) {
    if (element.classList.contains('animate')) {
        element.classList.remove('animate');
        element.classList.add('reverse');
    } else {
        element.classList.remove('reverse');
        element.classList.add('animate');
    }
}
</script>

<style>
    .hamburger {
        width: 40px;
        height: 40px;
        position: relative;
        background: transparent;
        border: none;
        cursor: pointer;
    }
    .hamburger span {
        display: block;
        width: 100%;
        height: 4px;
        background-color: #000;
        position: absolute;
        transition: all 0.5s linear;
    }
    .hamburger span:first-child {
        top: 12px;
    }
    .hamburger span:nth-child(2) {
        top: 18px; /* Adjust this to ensure it doesn't jump */
        opacity: 0; /* Start with the middle bar invisible */
    }
    .hamburger span:last-child {
        top: 24px;
    }

    /* Adjust animations to handle showing/hiding the middle bar */
    .animate span:first-child {
        animation: toCross 0.5s forwards;
    }
    .animate span:nth-child(2) {
        animation: fadeOut 0.5s forwards;
    }
    .animate span:last-child {
        animation: toCrossInverse 0.5s forwards;
    }
    .reverse span:first-child {
        animation: fromCrossToSingleBar 0.5s forwards;
    }
    .reverse span:nth-child(2) {
        animation: fadeIn 0.5s forwards;
    }
    .reverse span:last-child {
        animation: fromCrossToSingleBarInverse 0.5s forwards;
    }

    @keyframes toCross {
        to { transform: rotate(45deg); top: 18px; }
    }
    @keyframes toCrossInverse {
        to { transform: rotate(-45deg); top: 18px; }
    }
    @keyframes fadeOut {
        to { opacity: 0; }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>

<button class="hamburger" onclick="toggleAnimation(this)">
    <span></span>
    <span></span>
</button>
