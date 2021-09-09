import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage (){
    function addMeetupHandler(meetupData){
        fetch('https://react-first-try-329c9-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-type': 'application/json'
                }
            }
        );
    }

    return(
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );

}

export default NewMeetupsPage;