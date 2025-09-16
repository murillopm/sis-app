interface OrganizationInvitationEmailTemplateProps {
  link: string
}

export function OrganizationInvitationEmailTemplate({
  link,
}: OrganizationInvitationEmailTemplateProps) {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>You have been invited to join an organization.</p>
      <a href={link} target="_blank">
        Accept invitation
      </a>
    </div>
  )
}
