# Wrapped Pocket Bridge Key Generation

This guide will help Wrapped Pocket bridge deployers generate a pair of keys — one for the Pocket Network and one for the Ethereum Network. These keys are essential for the successful deployment and operation of the bridge.

## Prerequisites

Before you can get started, ensure that you have the following software installed on your computer:

1. **Git**: Git is a version control system that allows you to manage your project's source code. If you don't have Git installed, follow the installation guide for your operating system:

    - [Install Git Guide](https://github.com/git-guides/install-git)

2. **Yarn**: Yarn is a package manager for JavaScript. You'll need it to install project dependencies. If you don't have Yarn installed, follow the installation guide:
    - [Install Yarn Guide](https://classic.yarnpkg.com/lang/en/docs/install/)

## Getting Started

Once you have Git and Yarn installed, follow these steps to generate the required key pair:

1. **Clone the Repository**: Open your command line terminal (Command Prompt on Windows, Terminal on macOS/Linux) and run the following command to clone the project repository:

    ```
    git clone https://github.com/dan13ram/wpokt-bridge-generate-keys
    ```

2. **Change to Project Directory**: Navigate to the project directory by running:

    ```
    cd wpokt-bridge-generate-keys
    ```

3. **Install Dependencies**: Now that you're inside the project directory, you can install the required dependencies by running:

    ```
    yarn install
    ```

4. **Generate Key Pair**: To generate the key pair needed for the Wrapped Pocket bridge deployment, run the following command:

    ```
    yarn generate
    ```

5. **Stored in "keys" Folder**: The key pair, including private keys, addresses, and public keys, has been generated and is available in the "keys" folder within the project directory. **Make sure to keep these keys secure and do not share them with anyone**. They are crucial for the operation of the Wrapped Pocket bridge.

6. **Use Generated Keys**: Follow the deployment instructions of the Wrapped Pocket bridge to use the generated keys effectively.

Congratulations! You've successfully generated the key pair required for deploying the Wrapped Pocket bridge.
