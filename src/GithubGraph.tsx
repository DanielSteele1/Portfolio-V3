import { Loader } from "@mantine/core";
import GitHubCalendar from "react-github-calendar";

import './App.css';

interface GraphProps {

    loading: boolean;
    isThemeOn: boolean;
}

function GithubGraph({ loading}: GraphProps) {

    return (
        <>
            {loading ? (
                <Loader
                    className="loader"
                    color="var(--button-gradient)"
                />

            ) : (

                <div className="landing-grid">
                    <GitHubCalendar
                        username="danielsteele1"
                        errorMessage="Could not show Graph right now. Please Reload :)"
                        loading={loading}
                        hideColorLegend={true}
                    />
                </div>
            )}

        </>

    )
}

export default GithubGraph;