<template>
  <div class="footer_container">
    <div class="footer_content">
        <div class="footer_grid">
            
            <div class="grid_router">
                <a href="https://twitter.com/SafariWorld_SWT">
                    Follow us on Twitter!
                </a>
            </div>
            <div class="grid_socials">
                <div>
                    <a href="https://twitter.com/SafariWorld_SWT" target="_blank">
                        <img src="./assets/img/twitter.webp" width="30"/>
                    </a>
                    <a href="https://discord.gg/TfwmhfeWDe" target="_blank">
                        <img src="./assets/img/discord.webp" width="30"/>
                    </a>
                    <a href="https://github.com/SafariWorldOnline" target="_blank">
                        <img src="./assets/img/github.webp" width="30"/>
                    </a>
                    <a href="https://www.facebook.com/SafariWorldTokenSWT" target="_blank">
                        <img src="./assets/img/facebook.webp" width="30"/>
                    </a>
                    <a href="https://www.instagram.com/safariworldtoken/" target="_blank">
                        <img src="./assets/img/instagram.webp" width="30"/>
                    </a>
                    <a href="https://t.me/SafariWorldOnline" target="_blank">
                        <img src="./assets/img/telegram.webp" width="30"/>
                    </a>
                </div>

            </div>
            <div class="grid_buy">

                <a href="https://discord.gg/TfwmhfeWDe" target="_blank">
                    Talk to us now in Discord.
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>



.footer_container {
    background-color: black;
    margin: 0;
    padding-bottom: 50px;
    @media (min-width: 768px) {

        padding-bottom: 75px;
    }
}
.footer_content {
    padding: 10px;
    
}
.footer_grid {
    display: block;
    align-items: center;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        display: grid;
    }
}
.grid_socials {
    display: inline;
    color: white;
    padding: 10px;
    img {
        filter: invert(100%);
    }
    a {
        padding: 5px;
    }
}
.grid_router {
    padding: 10px;
    align-items: center;
}
.grid_buy {
    padding: 10px;
    align-items: center;
}
</style>