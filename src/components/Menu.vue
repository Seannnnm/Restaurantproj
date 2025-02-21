<template>
    <v-card color="amber-darken-2" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>

<v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key="item">    
                    <v-card>
                        <v-card color="amber-darken-2">
                            <v-card-item>
                                <v-card-title>{{item.name}}</v-card-title>

                                <v-card-subtitle>{{item.description}}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>
                           {{ item.price }} 
                           
                           <v-btn variant="tonal"@click="addToOrder(item)">
                                  Place Order
                               </v-btn>

                            </v-card-text>
                       </v-card>
                    </v-card>
                </v-col>
            </v-row>
            </v-container>
        </v-card>
    </v-container>
                      

    <v-container>
        <v-card color="amber-darken-2" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="yellow">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>

    

    </template>

     <v-container>
        
    </v-container>

    <script setup>
    
    const menuItems = [
    {
        name: "Kanye  West",
        price: 1000,

        description: "artist and worldwide racist",
        size: "Large",
        offers: "None", 
        image: "../public/mrwest.jpg"
    },
    {
        name: "Sausage",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "../public/img12.avif"
    },
    {
        name: "Soda",
        price: 150,
        description: "All you can drink",
        size: "Large",
        offers: "None",
        image: "../public/img13.avif"
    },
    {
        name: "Naan",
        price: 50,
        description: "Best bread in town",
        size: "None",
        offers: "None",
        image: "../public/img15.avif"
    },
    {
        name: "Coffee",
        price: 200,
        description: "Best coffee around!",
        size: "Large",
        offers: "None",
        image: "../public/img14.avif"
    },
    {
        name: "Wine",
        price: 5000,
        description: "Superb wine tasting experience",
        size: "None",
        offers: "None",
        image: "../public/img16.avif"
    }
]
//manage the orders
var orderItems=[]
var totalOrderAmount=0

function caclulateTotalAmount(price){
    totalOrderAmount += price
}
function addToOrder(item){
    orderItems.push(item)
    caclulateTotalAmount(item.price)
}
    </script>