import React, {useContext, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import {allEventsQuery, allPaintingsQuery} from '../queries/queries';
import moment from 'moment';

const StoreContext = React.createContext();

export const useStore = () => {
    return useContext(StoreContext);
};

export default function StoreProvider({children}) {
    const [store, setStore] = useState({
        cart: [],
        paintings: [],
        events: [],
    });

    // const [loadings, setLoadings] = useState({
    //     fetchPaintings: false,
    //     fetchedEvents: false
    // })

    const {cart, paintings, events} = store;

    const fetchedPaintings = useQuery(allPaintingsQuery,
        // {
        //     variables: {
        //         start: 0,
        //         limit: 1
        //     },
        // }
    );
    const fetchedEvents = useQuery(allEventsQuery,
        // {
        //     variables: {
        //         start: 0,
        //         limit: 12
        //     },
        // }
    );

    //Start settings of events

    useEffect(() => {
        if (fetchedEvents?.data?.events) {
            const initialList = fetchedEvents?.data?.events?.slice();

            let filteredList = initialList.filter(
                (event) =>
                    moment(event?.date).format('YYYYMMDD') >= moment().format('YYYYMMDD')
            );

            if (filteredList.length === 0) {
                filteredList = initialList;
            }

            filteredList.sort(
                (a, b) =>
                    moment(a?.date).format('YYYYMMDD') -
                    moment(b?.date).format('YYYYMMDD')
            );

            setStore((store) => ({...store, events: filteredList}));
        }
    }, [fetchedEvents.data]);

    //End settings of events

    useEffect(() => {
        if (fetchedPaintings?.data && fetchedPaintings?.data.paintings) {
            let newPaintingList = fetchedPaintings.data?.paintings || [];
            let newPaintingCart = [];

            if (localStorage.hasOwnProperty('cart')) {
                const cartFromlocalStorage = JSON.parse(localStorage.getItem('cart'));
                console.log(cartFromlocalStorage)
                newPaintingCart = cartFromlocalStorage.filter((cartItem) => {
                    const idx = newPaintingList.findIndex(
                        (item) => item?.id === cartItem?.id
                    );
                    if (idx !== -1) {
                        return cartItem;
                    } else {
                        return null;
                    }
                });

                newPaintingList = newPaintingList.map((item) => {
                    if (newPaintingCart.find((cartItem) => item?.id === cartItem?.id)) {
                        return {...item, chosen: true};
                    } else {
                        return {...item, chosen: false};
                    }
                });
            }
            setStore((store) => ({
                ...store,
                cart: newPaintingCart,
                paintings: newPaintingList,
            }));
            localStorage.setItem('cart', JSON.stringify([...cart, newPaintingCart]));
        }
    }, [fetchedPaintings.data]);

    const addToCart = (id) => {
        const painting = paintings.find((item) => item.id === id);
        const checkForExistingCart = cart.find((item) => item.id === id);

        if (!checkForExistingCart && painting) {
            const newPaintingList = paintings.map((item) => {
                if (item.id === id || checkForExistingCart) {
                    return {...item, chosen: true};
                }
                return item;
            });

            setStore((store) => ({
                ...store,
                cart: [...cart, painting],
                paintings: newPaintingList,
            }));
            localStorage.setItem('cart', JSON.stringify([...cart, painting]));
        } else {
            removeFromCart(id);
        }
    };

    const removeFromCart = (id) => {
        const painting = paintings.find((item) => item.id === id);
        const checkForExistingCart = cart.find((item) => item?.id === id);

        if (painting && checkForExistingCart) {
            const newCart = cart.filter((item) => item.id !== id);

            const newList = paintings.map((item) => {
                if (item.id === id) {
                    return {...item, chosen: false};
                }
                return item;
            });

            setStore((store) => ({...store, cart: newCart, paintings: newList}));

            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };

    // const getMorePaintings = async () => {
    //     const {data} = await fetchedPaintings.fetchMore({
    //         variables: {
    //             start: paintings.length,
    //             limit: 10
    //         },
    //     })
    //
    //     //TODO: add more paintings function
    //     setTimeout(() => {
    //         console.log(store)
    //         // setStore( store => ({...store, paintings: [...store.paintings, data]}))
    //     }, 2000)
    // }

    return (
        <StoreContext.Provider
            value={{cart, paintings, events, removeFromCart, addToCart,
                // getMorePaintings, loadings
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}
