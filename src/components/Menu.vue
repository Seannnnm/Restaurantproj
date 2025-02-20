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
                                <v-card-title>Kanye West</v-card-title>

                                <v-card-subtitle>Kanye.West</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" src="../public/mrwest.jpg" cover ></v-img>

                            <v-card-text>
                            Price
                            </v-card-text>
                       </v-card>
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
        name: "kanye  west",
        price: 200,
        description: "Best nonchalant nigga in town",
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
        image: "../public/mrwest.jpg"
    },
    {
        name: "Soda",
        price: 100,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "../public/mrwest.jpg"
    },
    {
        name: "Chapati",
        price: 50,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "../public/mrwest.jpg"
    },
    {
        name: "Tea",
        price: 80,
        description: "Best chips in town",
        size: "Large",
        offers: "None",
        image: "../public/mrwest.jpg"
    },
    {
        name: "Wine",
        price: 5000,
        description: "Best sausages in town",
        size: "None",
        offers: "None",
        image: "../public/mrwest.jpg"
    }
]
    </script>