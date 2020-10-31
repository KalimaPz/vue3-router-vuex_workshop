<template>
<div>
    <div v-if="isMobile === true">
        <div class="profile-image">
            <div id="inner">
                <v-img id="image" :src="avatar_url" width="150"></v-img>
                <div id="name">
                    <h2>{{ full_name }}</h2>
                </div>
            </div>

        </div>
    </div>
    <div v-else>
        <div class="profile-image">
            <div id="zone">
                <div>
                    <v-img id="image" :src="avatar_url" width="250"></v-img>
                </div>
                <div id="details">
                    <h1>{{ full_name }}</h1>
                    <h2>{{ position}}</h2>
                    <h3>at {{ work }}</h3>
                </div>
            </div>
        </div>

    </div>
    <button @click="switchToMobile()"> Switch To Mobile
    </button>
    <button @click="switchToDesktop()"> Switch To Desktop
    </button>
</div>
</template>

<script>
export default {
    name: "ProfilePicture",
    props: ['avatar_url'],
    data() {
        return {
            isMobile: false,
            full_name: 'Donnukrit Satirakul',
            position: 'Front End Developer',
            work: 'Weserve Lifestyle Co.'
        }
    },
    methods: {
        switchToMobile() {
            this.isMobile = true;
        },
        switchToDesktop() {
            this.isMobile = false;
        }
    },
}
</script>

<style scoped>
.profile-image {
    display: flex;
    flex-direction: column;
    margin-top: 5%;
}

#inner {
    display: flex;
    flex-direction: column;
    align-items: center;

}

#name {
    text-align: center;
    padding-top: 5%;

}

#image {
    border-radius: 50%;
}

#zone {
    padding: 10%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

#details {
    text-align: center;
}
</style>
