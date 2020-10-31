<template>
<v-app class="app">
    <div>
        <NavBar />
        <div>
            <ProfilePicture :avatar_url="avatar_url" />
            <div>
                <MyInfo title="Info" />
            </div>
        </div>
    </div>
    <div>
    </div>

</v-app>
</template>

<script>
import axios from "axios";
import MyInfo from "./components/MyInfo";
// import Loading from './components/Loading'
import NavBar from './components/NavBar'
import ProfilePicture from './components/ProfilePicture'

export default {
    name: "App",
    components: {
        MyInfo,
        NavBar,
        ProfilePicture
    },
    data() {
        return {
            biography: [],
            avatar_url: ''
        };
    },
    methods: {
        async fetchMyData() {
            let ownerData = await axios.get(
                "https://resume-backend-services.herokuapp.com/api/person"
            );
            this.biography = ownerData.data
        },
        async fetchGithubData() {
            let githubData = await axios.get(`https://api.github.com/users/KalimaPz`)
            console.log(githubData.data.avatar_url)
            this.avatar_url = githubData.data.avatar_url
        }

    },
    mounted() {

        this.fetchMyData();
        this.fetchGithubData();
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500&display=swap');

.app {
    font-family: 'Kanit', sans-serif;
}

.nav-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 50px;

}

.info {
    padding: 20px;
}
</style>
