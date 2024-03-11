<script>
    export let text = "Button Text";
    export let size = "";
</script>

  <button class="button" type="submit">
    <span class="text-container text-body{size}">{text}</span>
    <span class="icon-container">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </span>
  </button>
  
  <style>
    .button {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 8px; /* Adjust space between text and icon */
      padding-bottom: 4px;
      padding-top: 4px;
      border: none;
      background: transparent;
      cursor: pointer;
      overflow: hidden;
    }
  
    .text-container {
      position: relative;
      color: #000000;
    }
  
    .text-container::before {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #cbd5e1; /* Grayish underline */
    }
  
    .text-container::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0%;
      height: 3px;
      background-color: black; /* Animated underline */
      transition: width 0.3s ease-out;
    }
  
    .button:hover .text-container::after {
      width: 100%;
    }
  
    .icon-container {
      transition: transform 0.3s ease-out, color 0.3s ease-out;
      color: #cbd5e1; /* Initial icon color */
    }
  
    .button:hover .icon-container {
      transform: translateX(4px);
      color: black;
    }
  </style>