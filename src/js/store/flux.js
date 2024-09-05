const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
			fetchContacts: async () => {
				fetchContacts: async () => {
					try {
						const response = await fetch('https://playground.4geeks.com/apis/fake/contact/');
						const data = await response.json();
						setStore({ contacts: data });
					} catch (error) {
						console.error("Error fetching contacts:", error);
					}
				};
				createContact: (contact) => {
					const store = getStore();
					setStore({ contacts: [...store.contacts, contact] });
				};
				updateContact: (updatedContact) => {
					const store = getStore();
					const updatedContacts = store.contacts.map(contact =>
						contact.id === updatedContact.id ? updatedContact : contact
					);
					setStore({ contacts: updatedContacts });
				};
				deleteContact: (contactId) => {
					const store = getStore();
					const updatedContacts = store.contacts.filter(contact => contact.id !== contactId);
					setStore({ contacts: updatedContacts });
				};
			}
		}
	};
};

export default getState;
