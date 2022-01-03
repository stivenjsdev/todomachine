import React from 'react';

const useLocalStorage = (itemName, initialValue) => {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);

    const getItemFromLocalStorage = () => {
        try {
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem = initialValue;

            if (!localStorageItem) {
                localStorage.setItem(itemName, JSON.stringify(initialValue));
            } else {
                parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
        } catch (error) {
            // setError(true); o mejor:
            setError(error);
        }
    }

    React.useEffect(() => {
        console.log('useLocalStorage useEffect executed')
        // simular que se tarda un rato
        setTimeout(() => {
            getItemFromLocalStorage()
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };