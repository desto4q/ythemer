# Yhemer: A Theming Website for Color Testing

## Introduction

Yhemer is a web application designed for testing and experimenting with various color schemes and themes on a dummy site. It allows users to dynamically change colors and observe the effects in real-time, making it an essential tool for designers and developers looking to create visually appealing websites.

## Features

-   **Dynamic Color Testing**: Instantly change color palettes and see the results on a dummy site.
-   **User-Friendly Interface**: Simple navigation to select and apply different themes.
-   **Responsive Design**: The application is optimized for both desktop and mobile use.
-   **Customizable Themes**: Users can create, save, and switch between multiple color themes.

## Getting Started

To get started with Yhemer, follow these steps:

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/yourusername/yhemer.git
    ```

2. **Install Dependencies**:
   Navigate to the project directory and install the necessary packages.

    ```bash
    cd yhemer
    npm install
    ```

3. **Run the Application**:
   Start the development server to view Yhemer in action.

    ```bash
    npm start
    ```

4. **Access the Application**:
   Open your browser and go to `http://localhost:3000` to start testing colors.

## Usage Instructions

-   Select a theme from the dropdown menu to apply it to the dummy site.
-   Use the color picker to customize specific elements (e.g., background, text, borders).
-   Save your favorite themes for future use.

## Example Theme Configuration

Yhemer supports state theme configurations. Here’s an example of how a theme can be structured:

```ts
	colors: {
		"text": "#222126",
		"primary": "#665df5",
		"secondary": "#6ad1e0",
		"background": "#ffffff"
    "accent":"red"
	}
```

## Contributing

Contributions are welcome! If you would like to contribute to Yhemer, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

-   Inspired by various theming frameworks and tools that enhance web design experiences.
-   Special thanks to all contributors who have helped improve Yhemer.

---

Feel free to modify this README as needed to suit your project's specific requirements!
