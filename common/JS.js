<script type="text/discourse-plugin" version="0.8">
  api.decorateWidget('topic-list-item:after', helper => {
    const topic = helper.getModel();
    if (topic.details && topic.details.created_by_group_names && topic.details.created_by_group_names.includes("community-mods")) {
      helper.attrs.className += ' group-community-mods';
    }
  });
</script>
