import Activity from '../models/Activity.js';

// Function to update the progress of service clicks
export const incrementServiceProgress = async (req, res) => {
  const { userId, name } = req.body; // userId and name passed from the front-end

  try {
    // Find the activity document for the given user and service name
    let activity = await Activity.findOne({ userId, name });

    if (!activity) {
      // If the activity doesn't exist, create a new one with progress set to 1
      activity = new Activity({ userId, name, progress: 1 });
    } else {
      // If activity exists, increment the progress
      activity.progress += 1;
    }

    // Save the updated activity to the database
    await activity.save();
    res.status(200).json({ success: true, progress: activity.progress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error updating progress' });
  }
};
