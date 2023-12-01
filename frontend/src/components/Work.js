// Add these imports at the top of your file
import { Route, Routes, useNavigate } from 'react-router-dom';
import AnnouncementPage from '../pages/WorkspaceSection';
import ProjectsPage from '../pages/ProjectsPage';
import OngoingPage from '../pages/OngoingTasksPage';
import MeetingsPage from '../pages/MeetingsPage';
import ChattingPage from '../pages/ChatPage';

// Inside your component, add these routes within the <Routes> component
<Routes>
  <Route path="announcement" element={<AnnouncementPage />} />
  <Route path="projects" element={<ProjectsPage />} />
  <Route path="ongoing" element={<OngoingPage />} />
  <Route path="meetings" element={<MeetingsPage />} />
  <Route path="chatting" element={<ChattingPage />} />
</Routes>
