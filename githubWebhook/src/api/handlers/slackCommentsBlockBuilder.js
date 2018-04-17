'use strict';

module.exports = ({ PlatformService }, config) => {
  return {
    async slackCommentsBlockBuilder(payload, color) {
      return await PlatformService.promiseOnGetUrl(payload.pull_request.review_comments_url, {
        'User-Agent': config.github.userAgent
      })
        .then(res => {
          const mappedArr = JSON.parse(res)
            .filter(elem => elem.commit_id == elem.original_commit_id)
            .map(elem => {
              return {
                text: elem.body,
                color,
                footer: `<${elem.html_url}|Commented by ${payload.sender.login} on line ${
                  elem.original_position
                } of ${elem.path}>`
              };
            });
          if (mappedArr.length > 5) {
            return mappedArr.slice(0, 5).concat({
              text: `<${payload.review.html_url}|View all ${mappedArr.length} comments on Github>`,
              color
            });
            return redirArr;
          }
          return mappedArr;
        })
        .catch(err => err);
    }
  };
};
