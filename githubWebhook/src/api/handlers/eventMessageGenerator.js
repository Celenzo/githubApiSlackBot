'use strict';

module.exports = () => {
  const onCommitComment = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] <${eventData.userUrl}|${
      eventData.userName
    }> left a <${payload.comment.html_url}|comment> on ${payload.comment.body}`;
  };
  //Create : either repo, branch or tag
  const onCreate = (payload, eventData) => {
    if (payload.ref_type == 'branch') {
      const branchUrl = eventData.repoUrl + '/' + payload.ref;
      return `[<${eventData.repoUrl}|${eventData.repoName}>] New branch "<${branchUrl}|${
        payload.ref
      }>" was pushed by <${eventData.userUrl}|${eventData.userName}>`;
    }
    if (payload.ref_type == 'tag') {
      return `[<${eventData.repoUrl}|${eventData.repoName}>] New tag *${
        payload.ref
      }* was created by <${eventData.userUrl}|${eventData.userName}>`;
    }
    return ``;
  };
  //Delete : either branch or tag
  const onDelete = (payload, eventData) => {
    if (payload.ref_type == 'tag') {
      return `[<${eventData.repoUrl}|${eventData.repoName}>] Tag *${payload.ref}* was deleted by <${
        eventData.userUrl
      }|${eventData.userName}>`;
    }
    if (payload.ref_type == 'branch') {
      const branchUrl = eventData.repoUrl + '/' + payload.ref;
      return `[<${eventData.repoUrl}|${eventData.repoName}>] The branch <${branchUrl}|${
        payload.ref
      } was deleted by <${eventData.userUrl}|${eventData.userName}>`;
    }
    return ``;
  };
  const onDeployment = (payload, eventData) => {
    return `The repository [<${eventData.repoUrl}|${eventData.repoName}>] was deployed by <${
      eventData.userUrl
    }|${eventData.userName}>`;
  };
  const onDeploymentStatusEvent = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] deployment status is now *${
      deploymentStatus.state
    }*`;
  };
  const onFork = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] was forked by <${eventData.userUrl}|${
      eventData.userName
    }>`;
  };
  //Triggered when a Wiki page is created or updated.
  const onGollum = (payload, eventData) => {
    const pagesString = payload.pages.reduce((sum, page) => sum.concat(page + ' '), []);
    return `[<${eventData.repoUrl}|${
      eventData.repoName
    }>] The following Wiki pages were created/updated ${pagesString}`;
  };
  //Triggered when a GitHub App has been installed or uninstalled.
  const onInstallation = (payload, eventData) => {
    return `A new Github app has been ${payload.action}`;
  };
  //Triggered when a repository is added or removed from an installation
  const onInstallRepo = (payload, eventData) => {
    const repoRemoved = payload.repositories_removed.reduce((s, name) => s + name + ' ', []);
    const repoInstalled = payload.repositories_added.reduce((s, name) => s + name + ' ', []);
    return `Installation ${
      payload.installation.id
    } modified : Repositoried added: *${repoInstalled}* / Repositoried removed: *${repoInstalled}*`;
  };
  //Const On issue comment create, delete or edited
  const onIssueComment = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] An issue comment was ${
      payload.action
    } by <${eventData.userUrl}|${eventData.userName}> on issue <${payload.issue.url}|${
      payload.issue.id
    }>`;
  };
  //On issue assigned, unassigned, unlabled, opened, edited, milestoned,
  //demilestoned, closed or reopened
  const onIssue = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}> The issue "<${payload.issue.url}|${
      payload.issue.title
    }>" has been set to ${payload.action} by <${eventData.userUrl}|${eventData.userName}>"]`;
  };
  //On label create, edited or deleted
  const onLabel = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] Label <${payload.label.url}|${
      payload.label.name
    }> has been ${payload.action}`;
  };
  //On purchase, cancels or plan change
  const onMarketplacePurchase = (payload, eventData) => {
    return `The Marketplace plan was ${payload.action}`;
  };
  //On member added, removed, or perm change to a repo
  const onMember = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] The member <${payload.member.url}|${
      payload.member.login
    }> has been ${payload.action} as a collaborator to the repository by <${eventData.userUrl}|${
      eventData.userName
    }>`;
  };
  //On add or remove from team
  const onMembership = (payload, eventData) => {
    return `<${payload.member.url}|${payload.member.login}> has been ${
      payload.action
    } to the team <${payload.team.url}|${payload.team.name}> by <${eventData.userUrl}|${
      eventData.userName
    }>`;
  };
  //On milestone create, open, edit, delete
  const onMilestone = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] Milestone <${payload.milestone.url}|${
      payload.milestone.title
    }> was ${payload.action} by <${eventData.userUrl}|${eventData.userName}>`;
  };
  //On user add / rm / invited in orga
  const onOrganization = (payload, eventData) => {
    const message = `<${payload.organization.url}|${payload.organization.login}> by <${
      eventData.userUrl
    }|${eventData.userName}>`;
    if (payload.action == 'member_invited')
      return (
        `<${payload.invitation.url}|${payload.invitation.login}> has been invited to join ` +
        message
      );
    if (payload.action == 'member_added')
      return `<${payload.membership.url}|${payload.membership.login}> has been added to ` + message;
    if (payload.action == 'member_removed')
      return (
        `<${payload.membership.url}|${payload.membership.login}> has been removed from ` + message
      );
    return message;
  };
  //On user block/unblock by orga
  const onOrgBlock = (payload, eventData) => {
    return `<${payload.blocked_user.url}|${payload.blocked_user.login}> was ${
      payload.action
    } from <${payload.organization.url}|${payload.organization.login}> by <${eventData.userUrl}|${
      eventData.userName
    }>`;
  };
  //On attempted page build
  const onPageBuild = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] <${eventData.userUrl}|${
      eventData.userName
    }> attempted to build Github Pages`;
  };
  //On create/update/convert/move/delete project card
  const onProjectCard = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] A project card was ${
      payload.action
    } by <${eventData.userUrl}|${eventData.userName}>`;
  };
  //On create/update/move/delete project column
  const onProjectColumn = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] The project column <${
      payload.project_column.url
    }|${payload.project_column.name}> was ${payload.action} by <${eventData.userUrl}|${
      eventData.userName
    }>`;
  };
  //On create/update/close/reopen/delete project
  const onProject = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] The project <${payload.project.url}|${
      payload.project.name
    }> was ${payload.action} by <${eventData.userUrl}|${eventData.userName}>`;
  };
  //On change from private repo to open source
  const onPublic = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] is now public`;
  };
  const onPullRequest = (payload, eventData) => {
    //*Missing handling for actions : 'assigned' / 'unassigned' / 'review_requested' /
    //'review_request_removed', 'labeled', 'unlabeled', 'edited', 'reopened'
    if (payload.action === 'opened')
      return `[<${eventData.repoUrl}|${eventData.repoName}>] Pull request submitted by <${
        eventData.userUrl
      }|${eventData.userName}> <${payload.pull_request.url}|${payload.pull_request.title}>`;
    if (payload.action === 'closed')
      return `[<${eventData.repoUrl}|${eventData.repoName}>] Pull request ${payload.action}: <${
        payload.pull_request.title
      }|${payload.pull_request.title}> by <${eventData.userUrl}|${eventData.userName}>`;
  };
  const onPullRequestReview = (payload, eventData) => {
    if (payload.action === 'submitted') {
      if (payload.review.state === 'approved')
        return `[<${eventData.repoUrl}|${eventData.repoName}>] <${eventData.userUrl}|${
          eventData.userName
        }> approved <${payload.pull_request.url}|${payload.pull_request.title}>`;
      if (payload.review.state === 'changes_requested')
        return `[<${eventData.repoUrl}|${eventData.repoName}>] <${eventData.userUrl}|${
          eventData.userName
        }> requested changes to <${payload.pull_request.url}|${payload.pull_request.title}>`;
      if (payload.review.state === 'commented')
        return `[<${eventData.repoUrl}|${eventData.repoName}>] <${eventData.userUrl}|${
          eventData.userName
        }> commented on <${payload.pull_request.url}|${payload.pull_request.title}>`;
    }
    return `[<${eventData.repoUrl}|${eventData.repoName}>] Review on <${payload.pull_request.url}|${
      payload.pull_request.title
    }> was ${payload.action} by <${eventData.userUrl}|${eventData.userName}>`;
  };
  const onPullRequestReviewComment = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] <${eventData.userUrl}|${
      eventData.userName
    }> ${payload.action} a comment on pull request <${payload.pull_request.url}|${
      payload.pull_request.title
    }>`;
  };
  const onPush = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] New push by <${eventData.userUrl}|${
      eventData.userName
    }> on ${payload.ref}`;
  };
  const onRelease = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] <${eventData.userUrl}|${
      eventData.userName
    }> ${payload.action} a realease`;
  };
  //On repo create/archive/unarchive/public/private/delete
  const onRepository = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] was ${payload.action} by <${
      eventData.userUrl
    }|${eventData.userName}>`;
  };
  //On commit status change
  const onStatus = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] <${eventData.userUrl}|${
      eventData.userName
    }> changed commit <${payload.commit.url}|${payload.description}> status to ${payload.state}`;
  };
  //On orga team create/delete
  const onTeam = (payload, eventData) => {
    return `Team <${payload.team.url}|${payload.team.name}> was ${payload.action} by <${
      eventData.userUrl
    }|${eventData.userName}>`;
  };
  //On repo added to team
  const onTeamAdd = (payload, eventData) => {
    return `[<${eventData.repoUrl}|${eventData.repoName}>] was added to <${payload.team.url}|${
      payload.team.name
    }> by <${eventData.userUrl}|${eventData.userName}>`;
  };
  //Not related to watching but to starring
  const onWatch = (payload, eventData) => {
    return `<${eventData.userUrl}|${eventData.userName}> starred [<${eventData.repoUrl}|${
      eventData.repoName
    }>]`;
  };

  const generators = [
    { eventName: 'commit_comment', generator: onCommitComment },
    { eventName: 'create', generator: onCreate },
    { eventName: 'delete', generator: onDelete },
    { eventName: 'deployment', generator: onDeployment },
    { eventName: 'deployment_status', generator: onDeploymentStatusEvent },
    { eventName: 'fork', generator: onFork },
    { eventName: 'gollum', generator: onGollum },
    { eventName: 'installation', generator: onInstallation },
    { eventName: 'installation_repositories', generator: onInstallRepo },
    { eventName: 'issues', generator: onIssue },
    { eventName: 'issue_comment', generator: onIssueComment },
    { eventName: 'label', generator: onLabel },
    { eventName: 'marketplace_purchase', generator: onMarketplacePurchase },
    { eventName: 'member', generator: onMember },
    { eventName: 'membership', generator: onMembership },
    { eventName: 'milestone', generator: onMilestone },
    { eventName: 'organization', generator: onOrganization },
    { eventName: 'org_block', generator: onOrgBlock },
    { eventName: 'page_build', generator: onPageBuild },
    { eventName: 'project', generator: onProject },
    { eventName: 'project_card', generator: onProjectCard },
    { eventName: 'project_column', generator: onProjectColumn },
    { eventName: 'public', generator: onPublic },
    { eventName: 'pull_request', generator: onPullRequest },
    { eventName: 'pull_request_review', generator: onPullRequestReview },
    { eventName: 'pull_request_review_comment', generator: onPullRequestReviewComment },
    { eventName: 'push', generator: onPush },
    { eventName: 'release', generator: onRelease },
    { eventName: 'repository', generator: onRepository },
    { eventName: 'status', generator: onStatus },
    { eventName: 'team', generator: onTeam },
    { eventName: 'team_add', generator: onTeamAdd },
    { eventName: 'watch', generator: onWatch }
  ];

  return {
    generate(headers, JSONPayload) {
      const generator = generators.filter(event => event.eventName == headers['x-github-event']);
      if (!generator) {
        return '';
      }
      const payload = JSON.parse(JSONPayload);
      const message = generator[0].generator(payload, {
        userName: payload.sender.login,
        userUrl: payload.sender.url,
        repoName: payload.repository ? payload.repository.name : undefined,
        repoUrl: payload.repository ? payload.repository.url : undefined
      });
      return message;
    }
  };
};
