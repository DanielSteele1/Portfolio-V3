import { Loader } from "@mantine/core";
import GitHubCalendar from "react-github-calendar";

import { useEffect } from "react";

import './App.css';

interface GraphProps {

    loading: boolean;
    setLoading: (loading: boolean) => void;
    isThemeOn: boolean;
}

function GithubGraph({ loading, setLoading, isThemeOn}: GraphProps) {

    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);

    }, [setLoading]);

    return (
        <>
            {loading ? (
                <Loader
                    className="loader"
                    color="var(--button-gradient)"
                />

            ) : (

                <div className="landing-grid">
                    <div id="commit-graph">
                        <GitHubCalendar
                            username="danielsteele1"
                            errorMessage="Could not show Graph right now. Please Reload :)"
                            loading={loading}
                            hideColorLegend={true}
                        />
                    </div>
                </div>
            )}

        </>

    )
}

export default GithubGraph;