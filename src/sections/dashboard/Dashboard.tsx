import { config } from "../../app_config";

export function Dashboard() {
	const title = "Dashboard";
	const widgets = config.widgets;

	return (
		<>
			<div>
				<h1>{title}</h1>
				<ul>
					{widgets.map((widget) => (
						<li key={widget.id}>{widget.repository_url}</li>
					))}
				</ul>
			</div>
		</>
	);
}
