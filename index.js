hexo.extend.filter.register('before_post_render', function (data) {
  return data.layout === 'post'
    ? Object.assign(data, {
      friendly_link: data.date.unix().toString(16),
    })
    : data
})
