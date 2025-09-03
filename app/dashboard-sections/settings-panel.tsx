"use client"

import { 
  User, 
  Bell, 
  Shield, 
  Users, 
  Settings, 
  Edit, 
  Save, 
  X,
  Plus,
  Trash2,
  Key,
  Smartphone,
  Globe,
  Clock,
  Mail,
  CheckCircle,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { AnimatedElement } from "../animations"
import { 
  initialProfileData, 
  initialNotificationPrefs, 
  initialSecuritySettings, 
  initialTeamMembers 
} from "./data"
import type { 
  ProfileData, 
  NotificationPrefs, 
  SecuritySettings, 
  TeamMember,
  SettingsTabType 
} from "./types"

interface SettingsPanelProps {
  activeSettingsTab: SettingsTabType
  setActiveSettingsTab: (tab: SettingsTabType) => void
  showChangePasswordModal: boolean
  setShowChangePasswordModal: (show: boolean) => void
  showDeleteAccountModal: boolean
  setShowDeleteAccountModal: (show: boolean) => void
  showInviteTeamModal: boolean
  setShowInviteTeamModal: (show: boolean) => void
  profileData: ProfileData
  setProfileData: (data: ProfileData) => void
  notificationPrefs: NotificationPrefs
  setNotificationPrefs: (prefs: NotificationPrefs) => void
  securitySettings: SecuritySettings
  setSecuritySettings: (settings: SecuritySettings) => void
  teamMembers: TeamMember[]
  setTeamMembers: (members: TeamMember[]) => void
}

export function SettingsPanel({
  activeSettingsTab,
  setActiveSettingsTab,
  showChangePasswordModal,
  setShowChangePasswordModal,
  showDeleteAccountModal,
  setShowDeleteAccountModal,
  showInviteTeamModal,
  setShowInviteTeamModal,
  profileData,
  setProfileData,
  notificationPrefs,
  setNotificationPrefs,
  securitySettings,
  setSecuritySettings,
  teamMembers,
  setTeamMembers
}: SettingsPanelProps) {
  const settingsTabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "team", label: "Team", icon: Users }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-emerald-400"
      case "away":
        return "bg-amber-400"
      case "offline":
        return "bg-slate-400"
      default:
        return "bg-slate-400"
    }
  }

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="flex items-centre justify-between">
        <h3 className="text-lg font-medium text-slate-100">Profile Information</h3>
        <Button
          variant="outline"
          size="sm"
          className="border-slate-700/50 text-slate-300 hover:bg-slate-700/50"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-300 mb-2 block">Full Name</label>
            <Input
              value={profileData.fullName}
              onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-slate-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 mb-2 block">Email</label>
            <Input
              value={profileData.email}
              onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-slate-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 mb-2 block">Job Title</label>
            <Input
              value={profileData.jobTitle}
              onChange={(e) => setProfileData({ ...profileData, jobTitle: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-slate-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 mb-2 block">Department</label>
            <Input
              value={profileData.department}
              onChange={(e) => setProfileData({ ...profileData, department: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-slate-200"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-300 mb-2 block">Phone</label>
            <Input
              value={profileData.phone}
              onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-slate-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 mb-2 block">Location</label>
            <Input
              value={profileData.location}
              onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-slate-200"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-300 mb-2 block">Timezone</label>
            <Input
              value={profileData.timezone}
              onChange={(e) => setProfileData({ ...profileData, timezone: e.target.value })}
              className="bg-slate-700/50 border-slate-600/50 text-slate-200"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-300 mb-2 block">Bio</label>
        <textarea
          value={profileData.bio}
          onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
          rows={4}
          className="w-full bg-slate-700/50 border border-slate-600/50 rounded-md px-3 py-2 text-slate-200 resize-none"
        />
      </div>

      <div className="flex items-centre gap-4">
        <Button
          size="sm"
          className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-slate-700/50 text-slate-300 hover:bg-slate-700/50"
        >
          Cancel
        </Button>
      </div>
    </div>
  )

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-slate-100">Notification Preferences</h3>
      
      <div className="space-y-4">
        <div className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div>
            <div className="text-sm font-medium text-slate-200">New Applications</div>
            <div className="text-xs text-slate-400">Get notified when new candidates apply</div>
          </div>
          <Switch
            checked={notificationPrefs.newApplications}
            onCheckedChange={(checked) => setNotificationPrefs({ ...notificationPrefs, newApplications: checked })}
          />
        </div>

        <div className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div>
            <div className="text-sm font-medium text-slate-200">Interview Reminders</div>
            <div className="text-xs text-slate-400">Receive reminders before scheduled interviews</div>
          </div>
          <Switch
            checked={notificationPrefs.interviewReminders}
            onCheckedChange={(checked) => setNotificationPrefs({ ...notificationPrefs, interviewReminders: checked })}
          />
        </div>

        <div className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div>
            <div className="text-sm font-medium text-slate-200">Status Updates</div>
            <div className="text-xs text-slate-400">Updates on candidate status changes</div>
          </div>
          <Switch
            checked={notificationPrefs.statusUpdates}
            onCheckedChange={(checked) => setNotificationPrefs({ ...notificationPrefs, statusUpdates: checked })}
          />
        </div>

        <div className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div>
            <div className="text-sm font-medium text-slate-200">Team Mentions</div>
            <div className="text-xs text-slate-400">When team members mention you</div>
          </div>
          <Switch
            checked={notificationPrefs.teamMentions}
            onCheckedChange={(checked) => setNotificationPrefs({ ...notificationPrefs, teamMentions: checked })}
          />
        </div>

        <div className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div>
            <div className="text-sm font-medium text-slate-200">Weekly Reports</div>
            <div className="text-xs text-slate-400">Summary of weekly hiring activities</div>
          </div>
          <Switch
            checked={notificationPrefs.weeklyReports}
            onCheckedChange={(checked) => setNotificationPrefs({ ...notificationPrefs, weeklyReports: checked })}
          />
        </div>

        <div className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div>
            <div className="text-sm font-medium text-slate-200">Security Alerts</div>
            <div className="text-xs text-slate-400">Important security notifications</div>
          </div>
          <Switch
            checked={notificationPrefs.securityAlerts}
            onCheckedChange={(checked) => setNotificationPrefs({ ...notificationPrefs, securityAlerts: checked })}
          />
        </div>
      </div>
    </div>
  )

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-slate-100">Security Settings</h3>
      
      <div className="space-y-4">
        <div className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div>
            <div className="text-sm font-medium text-slate-200">Two-Factor Authentication</div>
            <div className="text-xs text-slate-400">Add an extra layer of security to your account</div>
          </div>
          <div className="flex items-centre gap-2">
            <Switch
              checked={securitySettings.twoFactorAuth}
              onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorAuth: checked })}
            />
            {securitySettings.twoFactorAuth && (
              <CheckCircle className="h-4 w-4 text-emerald-400" />
            )}
          </div>
        </div>

        <div className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div>
            <div className="text-sm font-medium text-slate-200">Login Notifications</div>
            <div className="text-xs text-slate-400">Get notified of new login attempts</div>
          </div>
          <Switch
            checked={securitySettings.loginNotifications}
            onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, loginNotifications: checked })}
          />
        </div>

        <div className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
          <div>
            <div className="text-sm font-medium text-slate-200">Device Management</div>
            <div className="text-xs text-slate-400">Manage active sessions and devices</div>
          </div>
          <Switch
            checked={securitySettings.deviceManagement}
            onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, deviceManagement: checked })}
          />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-300 mb-2 block">Session Timeout</label>
          <select
            value={securitySettings.sessionTimeout}
            onChange={(e) => setSecuritySettings({ ...securitySettings, sessionTimeout: e.target.value })}
            className="w-full bg-slate-700/50 border border-slate-600/50 rounded-md px-3 py-2 text-slate-200"
          >
            <option value="1 hour">1 hour</option>
            <option value="4 hours">4 hours</option>
            <option value="8 hours">8 hours</option>
            <option value="24 hours">24 hours</option>
          </select>
        </div>

        <div className="flex items-centre gap-4">
          <Button
            variant="outline"
            size="sm"
            className="border-slate-700/50 text-slate-300 hover:bg-slate-700/50"
            onClick={() => setShowChangePasswordModal(true)}
          >
            <Key className="h-4 w-4 mr-2" />
            Change Password
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-red-700/50 text-red-300 hover:bg-red-500/10"
            onClick={() => setShowDeleteAccountModal(true)}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  )

  const renderTeamTab = () => (
    <div className="space-y-6">
      <div className="flex items-centre justify-between">
        <h3 className="text-lg font-medium text-slate-100">Team Management</h3>
        <Button
          size="sm"
          className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white"
          onClick={() => setShowInviteTeamModal(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Invite Member
        </Button>
      </div>

      <div className="space-y-3">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-centre justify-between p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
            <div className="flex items-centre gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full flex items-centre justify-centre text-white font-medium">
                {member.avatar}
              </div>
              <div>
                <div className="text-sm font-medium text-slate-200">{member.name}</div>
                <div className="text-xs text-slate-400">{member.role}</div>
                <div className="text-xs text-slate-500">{member.email}</div>
              </div>
            </div>
            <div className="flex items-centre gap-3">
              <div className="flex items-centre gap-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(member.status)}`}></div>
                <span className="text-xs text-slate-400 capitalize">{member.status}</span>
              </div>
              <div className="text-xs text-slate-500">{member.lastActive}</div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-slate-400 hover:text-slate-300"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-slate-100">Settings</h2>
        <p className="text-sm text-slate-400">Manage your account and preferences</p>
      </div>

      {/* Settings Tabs */}
      <div className="bg-slate-800/50 rounded-lg border border-slate-700/50 backdrop-blur-sm">
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-centre gap-1">
            {settingsTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeSettingsTab === tab.id
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSettingsTab(tab.id as SettingsTabType)}
                  className={`flex items-centre gap-2 px-4 py-2 rounded-md text-sm transition-all ${
                    isActive 
                      ? 'bg-fuchsia-500/20 text-fuchsia-300' 
                      : 'text-slate-400 hover:text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="p-6">
          {activeSettingsTab === "profile" && renderProfileTab()}
          {activeSettingsTab === "notifications" && renderNotificationsTab()}
          {activeSettingsTab === "security" && renderSecurityTab()}
          {activeSettingsTab === "team" && renderTeamTab()}
        </div>
      </div>
    </div>
  )
} 




