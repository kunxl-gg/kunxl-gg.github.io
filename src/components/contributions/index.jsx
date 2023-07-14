import GitHubCalendar from 'react-github-calendar';

const GithubContributions = ({ loading }) => {
    return(
    <div className="card shadow-lg compact bg-base-100 py-4 hidden md:flex">
            {loading ? (
            skeleton({ width: 'w-32', height: 'h-8' })
            ) : (            
        <div className=" flex justify-center items-center px-5 py-5">
            <div>
                <h5 className='card-title'>
                    <span className="text-base-content opacity-70 pb-3">
                        GitHub Contributions
                    </span>
                </h5>
                <GitHubCalendar
                    colorScheme="light"
                    username="kunxl-gg"
                />
            </div> 
        </div>
        )}
    </div>
    )
}

export default GithubContributions