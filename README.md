# KanbanBoard_ReduxTK


This project features a dynamic Kanban Board crafted with React and Redux Toolkit and Material-UI, incorporating seamless drag-and-drop functionality through react-beautiful-dnd.

## Introduction

The Kanban Board is designed to enhance project management by allowing teams to visualize their tasks and streamline their workflow. Embracing the principles of the Kanban methodology, it provides users with the ability to create, rearrange, and track tasks as they progress through various project stages. The board’s primary aim is to deliver an accessible overview of project status, promoting timely task execution and efficient collaboration.

## Project Structure

## Project Structure

```sh
KanbanBoard_ReduxTK/
├── .gitattributes
├── .gitignore
├── LICENSE
├── 
├── public/
│   ├── 
├── 
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   │   ├── AddCandidateForm.jsx
│   │   ├── Card.jsx
│   │   ├── Column.jsx
│   │   ├── Kanban.jsx
│   │   ├── SearchInput.jsx
│   │   ├── TaskCard.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── redux/
│   │   ├── kanban/
│   │   │   ├── kanbanSlice.jsx
│   │   ├── Store.jsx
├── 
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/amitosh2002/KanbanBoard_ReduxTK.git
    ```
2. Navigate to the project directory:
    ```sh
    cd KanbanBoard_ReduxTK
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:
```sh
npm run dev
```

## Project Details

### Components

- **AddCandidateForm**: A form to add new tasks to the Kanban board. [src/Component/AddCandidateForm.jsx](src/Component/AddCandidateForm.jsx)
- **Card**: A card component to display task details. [src/Component/Card.jsx](src/Component/Card.jsx)
- **Column**: A column component to hold tasks. [src/Component/Column.jsx](src/Component/Column.jsx)
- **Kanban**: The main Kanban board component. [src/Component/Kanban.jsx](src/Component/Kanban.jsx)
- **SearchInput**: A search input component to filter tasks. [src/Component/SearchInput.jsx](src/Component/SearchInput.jsx)
- **TaskCard**: A draggable task card component. [src/Component/TaskCard.jsx](src/Component/TaskCard.jsx)

### Redux

- **Store**: The Redux store configuration. [src/Redux/Store.jsx](src/Redux/Store.jsx)
- **Kanban Slice**: The Kanban slice for managing tasks. [src/Redux/Kanban/kanbanSlice.jsx](src/Redux/Kanban/kanbanSlice.jsx)

### Configuration

#### ESLint

The project uses ESLint for code linting. Configuration can be found in [eslint.config.js](eslint.config.js).

#### Vite

The project uses Vite as the build tool. Configuration can be found in [vite.config.js](vite.config.js).

## License

This project is licensed under the MIT License.

## Screenshot
| ![Image 1](https://github.com/user-attachments/assets/621caaed-c669-4b85-a925-19d109e2e025) | ![Image 2](https://github.com/user-attachments/assets/0649f6fc-5bfb-4b02-8855-9d69f1b6c6a9) | ![Image 3](https://github.com/user-attachments/assets/79834759-020f-4265-93d6-ba78b08887e7) |
| :-------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
|                                          _Image 1_                                          |                                          _Image 2_                                          |                                          _Image 3_                                          |
| ![Image 4](https://github.com/user-attachments/assets/b8328df1-0ded-44fb-9868-5d6af2886cb3) | ![Image 5](https://github.com/user-attachments/assets/8ab423ae-4b8d-4a78-95df-a91295898b91) | ![Image 6](https://github.com/user-attachments/assets/927ac1cb-b263-4a63-8f3a-c622b57f9325) |
|                                          _Image 4_                                          |                                          _Image 5_                                          |                                          _Image 6_                                          |
| ![Image 7](https://github.com/user-attachments/assets/be8fa359-bc72-46ad-858a-7f7077f50055) |  |  |
|                                          _Image 7_                                          |  |  |


