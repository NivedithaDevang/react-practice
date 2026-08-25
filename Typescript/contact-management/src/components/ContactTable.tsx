import type { Contact } from "../types/Contact";

interface ContactTableProps {
	contacts: Contact[];
	onDeleteContact: (id: number) => void;
}

function ContactTable({ contacts, onDeleteContact }: ContactTableProps) {
	if (contacts.length === 0) {
		return <p className="empty-state">No contacts match your search.</p>;
	}

	return (
		<div className="table-wrapper">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Phone</th>
						<th>Label</th>
						<th><span className="visually-hidden">Actions</span></th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((contact) => (
						<tr key={contact.id}>
							<td data-label="Name">{contact.name}</td>
							<td data-label="Phone">{contact.phone}</td>
							<td data-label="Label"><span className="tag">{contact.label}</span></td>
							<td className="action-cell">
								<button className="delete-button" type="button" onClick={() => onDeleteContact(contact.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ContactTable;
