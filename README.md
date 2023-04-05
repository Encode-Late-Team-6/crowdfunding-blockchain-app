# Crowdfunding App Built with Blockchain Technology

This is the final project of team 6 from the Encode Solidity Bootcamp (March 2023)

### Smart Contract Part (Important notes)

- Use "Sepolia" instead of "Goerli" in the project. We can experience transaction failures otherwise. In case you would need its Chain ID: 11155111.

- Web3 Interface to interact with the smart contract: https://thirdweb.com/sepolia/0xA9B981fd48b2A9Dd9075B088d05393d80479b2b0/explorer

- Smart Contract Address: 0xA9B981fd48b2A9Dd9075B088d05393d80479b2b0

- Dotenv: You do not need to add your private key and deploy the smart contract 2nd time because the contract is already deployed. `.env` file has only PRIVATE_KEY constant used to deploy the contract.


To get started with the project, navigate to the project directory and run:

```bash
cd client
```

To run the client application, first install the required dependencies using:

```bash
npm install
```
Once the dependencies are installed, you can start the development server using:

```bash
npm run dev
```

This command will build the application and start a development server at http://localhost:5173/, where you can view the application in your browser. Any changes you make to the code will be automatically reloaded in the browser.

If you encounter any issues with `vite`, you may need to install it globally:

```bash
npm install -g vite
```