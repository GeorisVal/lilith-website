<script>
  import { browser } from '$app/environment';

  if (!browser) {
    window.location.href =
      'https://canary.discord.com/api/oauth2/authorize?client_id=1119566542628192340&permissions=17876191071232&scope=applications.commands%20bot';
  }
</script>
