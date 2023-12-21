import React from 'react'
import { ShowAlert } from '../sweetAlert/sweetAlert';


function BasketHandeler(id, author, price, image, mainCoun = 1, authContext, contextData) {

    authContext.setUserInfo((prevItem) => {
        let basketItems = prevItem.basketItems
        let existingItem = basketItems.find((item) => item.author === author);

        if (!existingItem) {
            const newItem = { id, author, price, image, count: mainCoun };

            // اضافه کردن مورد جدید به آرایه
            const updatedItems = [...basketItems, newItem]
            ShowAlert('success', 'به سبد خرید اضافه شد', contextData.darkMode && true)
            return { ...prevItem, basketItems: updatedItems };
        } else {
            // اگر مورد وجود داشته باشد، یک نسخه جدید از موارد ایجاد می‌شود.
            const updatedItems = basketItems.map((item) => {
                if (item.author === author) {
                    
                    if(window.location.pathname == `/book-details/${id}`){
                        
                        ShowAlert('success', 'به سبد خرید اضافه شد', contextData.darkMode && true)
                        return { ...item, price: price, count: mainCoun };
                    }else{
                        
                        ShowAlert('success', 'تعداد افزایش یافت', contextData.darkMode && true)
                        return { ...item, price: item.price + price, count: item.count + 1 };
                    }
                    
                }
                return item;
            });

            return { ...prevItem, basketItems: updatedItems };
        }
    })

}

export default BasketHandeler