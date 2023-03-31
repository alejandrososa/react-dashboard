import { githubApiResponses } from "../../github_api_responses";
import styles from "./Dashboard.module.scss";
import { ReactComponent as PullRequests } from "./icons/git-pull-request.svg";
import { ReactComponent as IssueOpened } from "./icons/issue-opened.svg";
import { ReactComponent as Lock } from "./icons/lock.svg";
import { ReactComponent as Forks } from "./icons/repo-forked.svg";
import { ReactComponent as Start } from "./icons/star.svg";
import { ReactComponent as Unlock } from "./icons/unlock.svg";
import { ReactComponent as Watchers } from "./icons/watchers.svg";

const isoToReadableDate = (lastUpdate: string) => {
	const LastUpdateDate = new Date(lastUpdate);
	const currentDate = new Date();
	const diffDays = currentDate.getDate() - LastUpdateDate.getDate();

	if (diffDays === 0) {
		return "today";
	}
	if (diffDays > 30) {
		return "more than a month ago";
	}

	return `${diffDays} days ago`;
};

export function Dashboard() {
	const title = "Dashboard";

	return (
		<>
			<header className={styles.header}>
				<section className={styles.header__container}>
					<h1 className={styles.app__brand}>{title}</h1>
				</section>
			</header>
			<section className={styles.container}>
				{githubApiResponses.map((widget) => (
					<article className={styles.widget} key={widget.repositoryData.id}>
						<header className={styles.widget__header}>
							<a
								className={styles.widget__title}
								href={widget.repositoryData.html_url}
								title={`${widget.repositoryData.owner.login}/${widget.repositoryData.name}`}
								target="_blank"
								rel="noreferrer"
							>
								{widget.repositoryData.owner.login}/{widget.repositoryData.name}
							</a>
							{widget.repositoryData.private ? <Lock /> : <Unlock />}
						</header>

						<div className={styles.widget__body}>
							<div className={styles.widget__status}>
								<p>Last update {isoToReadableDate(widget.repositoryData.updated_at)}</p>
							</div>
							<p className={styles.widget__description}>{widget.repositoryData.description}</p>
						</div>

						<footer className={styles.widget__footer}>
							<div className={styles.widget__stat}>
								<Start />
								<span>{widget.repositoryData.stargazers_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<Watchers />
								<span>{widget.repositoryData.watchers_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<Forks />
								<span>{widget.repositoryData.forks_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<IssueOpened />
								<span>{widget.repositoryData.open_issues_count}</span>
							</div>
							<div className={styles.widget__stat}>
								<PullRequests />
								<span>{widget.pullRequest.length}</span>
							</div>
						</footer>
					</article>
				))}
			</section>
		</>
	);
}
